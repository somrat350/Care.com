import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connect } from "./connectDB";

const usersCollection = await connect("users");

export const authOptions = {
  session: {
    strategy: "jwt",
  },

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const user = await usersCollection.findOne({
          email: credentials.email,
        });

        if (!user) throw new Error("User not found");

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) throw new Error("Invalid password");

        return {
          id: user._id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },

    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXT_AUTH_SECRET,
};
