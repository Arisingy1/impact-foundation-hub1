import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-8xl font-bold text-accent mb-4">404</h1>
        <p className="font-body text-lg text-muted-foreground mb-8">
          Страница не найдена
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-body font-medium hover:bg-primary/90 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}
