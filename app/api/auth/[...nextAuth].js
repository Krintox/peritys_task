import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emailOrPhone: { label: "Email or Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Use fetch to authenticate using fakestoreapi
        const res = await fetch('https://fakestoreapi.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({
            username: credentials.emailOrPhone,
            password: credentials.password,
          }),
        });

        const data = await res.json();

        if (res.ok && data.token) {
          // Return user details if login is successful
          return {
            id: data.id, // Use the returned user id if available
            name: data.name, // Assuming API returns user info with token
            email: data.email, // You can modify this if email is provided by API
            token: data.token,
          };
        }

        return null; // Return null if authentication fails
      },
    }),
  ],
  pages: {
    signIn: "/login", // Custom login page
    signOut: "/", // Redirect to home after sign out
    error: "/login", // Custom error page
  },
  callbacks: {
    async session({ session, token }) {
      // Add the token to session if needed
      session.user.token = token.token;
      return session;
    },
  },
  session: {
    strategy: "jwt", // Use JWT strategy for session management
  },
});

export { handler as GET, handler as POST };
