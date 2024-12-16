import Link from "next/link";

export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-4">
          <h1 className="h1 text-gradient">404</h1>
          <h2 className="h3">Page Not Found</h2>
          <p className="body-large text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="pt-6">
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Go Back Home
            </Link>
          </div>
        </div>
      </div>
    );
}