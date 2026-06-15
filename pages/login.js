import { Link } from '@components';
import { LoginForm } from '@components/Forms';
import { Button } from '@components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@components/ui/card';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <Button asChild variant="link" className="p-0">
            <Link href="/forgot">Forgot password?</Link>
          </Button>

          <Button asChild variant="link" className="p-0">
            <Link href="/signup">
              No account yet? <span className="font-bold text-card-foreground">Signup now</span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
};

export default Page;
