export default function Home() {
  return (
    <main className="min-h-screen bg-bg flex flex-col items-center justify-center gap-6 px-6 pt-20">
      <p className="font-body text-sm tracking-widest uppercase text-accent">
        Handcrafted for your moments
      </p>
      <h1 className="font-display text-6xl text-text text-center">
        Cakes made to be remembered.
      </h1>
      <p className="font-body text-text-secondary max-w-md text-center">
        Custom cakes, pastries and dessert experiences crafted for celebrations
        big and small.
      </p>
      <button className="bg-primary text-white rounded-pill px-6 h-12 font-body text-sm font-semibold hover:bg-primary-hover transition-colors duration-200">
        Explore the Menu
      </button>
    </main>
  );
}
