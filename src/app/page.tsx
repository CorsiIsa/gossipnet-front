import LoginForm from "@/components/home/login-form";
import RegisterForm from "@/components/home/register-form";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
        <aside className="h-screen w-1/2 overflow-hidden hidden lg:block">
          <img src="/wallpaperGossipNet.jpg" alt="wallpaper-login"  className="w-full h-full object-cover" />
        </aside>
        <div className="flex flex-col items-center gap-10 m-auto">
          <img src="/logo.jpg" alt="logo-login" className="w-40 h-40 rounded-full object-cover" />
          <h1 className="text-4xl font-extrabold uppercase">Gossip.Net</h1>
          
          <Tabs defaultValue="entrar" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="entrar">entrar</TabsTrigger>
              <TabsTrigger value="registrar">registrar</TabsTrigger>
            </TabsList>
            
            <TabsContent value="entrar">
              <LoginForm />
            </TabsContent>

            <TabsContent value="registrar">
              <RegisterForm />
            </TabsContent>
          </Tabs>

        </div>
        <footer className="absolute bottom-0 right-0 p-4">
          <ModeToggle/>
        </footer>
      </main>
  );
}
