## ADS Test Case Forwardin

This is a test case for ADS MSIB Internship. You can see the demo [here](https://ads-test-case.vercel.app/). Or you can type the following URL in your browser:

```
https://ads-test-case.vercel.app/
```

Or you can clone this repository and run it on your local machine.

### How to run the project

1. Clone the repository

```bash
git clone https://github.com/Ibrairsyad17/ads-test-case.git
```

2. Install the dependencies

```bash
npm install
```

3. Configure the database

- Create a new database in your MySQL server 'forwardin'
- Or you are using PostgreSQL, you can also create a new database 'forwardin'

4. Configure the environment variables

- Copy the `.env.example` file to `.env`
- Open the `.env` file and configure the database connection and other variables
- If you are using MySQL, you can use the following configuration:

```
DATABASE_URL="mysql://[YOUR-USER]:[YOUR-PASSWORD]@localhost:3306/forwardin"
```

- If you are using PostgreSQL, you can use the following configuration:

```
DATABASE_URL="postgresql://[YOUR-USER]:[YOUR-PASSWORD]@localhost:5432/forwardin"
```

- After that configure the NEXTAUTH_URL variable to your localhost or your development URL

```
NEXTAUTH_URL="http://localhost:3000"
```

- Next configure the NEXTAUTH_SECRET variable to your secret key

you can generate the secret key by running the following command:

```bash
openssl rand -base64 32
```

- Copy the generated key and paste it to the `.env` file

```
NEXTAUTH_SECRET="[YOUR-SECRET-KEY]"
```

5. Run the migrations

```bash
npx prisma migrate dev
```

6. Run the development server

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

8. You can sign up and create a new account on sign up page. After that you can login to the dashboard.
