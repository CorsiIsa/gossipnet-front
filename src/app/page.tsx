import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
        <aside className="h-screen w-1/2 overflow-hidden hidden lg:block">
          <img src="/wallpaperGossipNet.jpg" alt="wallpaper-login"  className="w-full h-full object-cover" />
        </aside>
        <section className="flex flex-col items-center justify-center h-screen w-1/2 gap-8">
          <img src="/logo.jpg" alt="logo-login" className="w-40 h-40 rounded-full object-cover" />
          <h1 className="text-4xl font-extrabold uppercase">GossipNet</h1>
          <Button>ENTRAR</Button>
        </section>

        <footer className="absolute bottom-0 right-0 p-4">
          <ModeToggle/>
        </footer>
      </main>
  );
}
