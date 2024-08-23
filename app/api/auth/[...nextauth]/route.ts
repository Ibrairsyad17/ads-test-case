import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      //  @ts-ignore
      async authorize(credentials) {
        const user = users.find(
          (u) =>
            u.username === credentials?.username &&
            u.password === credentials?.password,
        );

        if (user) {
          return { id: user.id, name: user.username };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //   @ts-ignore
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
    //   @ts-ignore
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
