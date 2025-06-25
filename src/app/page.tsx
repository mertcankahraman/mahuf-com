// Bu sayfada kullanıcının oturum bilgisini kontrol edeceğimiz için 'use client' olarak işaretliyoruz.
"use client";

// NextAuth'dan oturum bilgisini çekmek için 'useSession' hook'unu ve
// çıkış yapmak için 'signOut' fonksiyonunu dahil ediyoruz.
import { useSession, signOut } from "next-auth/react";

export default function HomePage() {
  // useSession hook'u bize oturum durumunu (status) ve oturum verisini (data: session) verir.
  const { data: session, status } = useSession();

  // Oturum durumu kontrol ediliyor...
  if (status === "loading") {
    return <p>Yükleniyor...</p>;
  }
  
  // Eğer kullanıcı giriş yapmışsa...
  if (status === "authenticated") {
    return (
      <main className="p-8">
        <h1 className="text-2xl font-bold">Hoş Geldin, {session.user?.email}</h1>
        <p>Oturumunuz açık. Rolünüz: {session.user?.role}</p>
        <pre className="mt-4 p-4 bg-gray-100 rounded-md overflow-x-auto">
          {/* Oturumun tüm verisini ekranda görmek için */}
          <code>{JSON.stringify(session, null, 2)}</code>
        </pre>
        {/* Çıkış Yap Butonu */}
        <button 
          onClick={() => signOut()} 
          className="mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700">
          Çıkış Yap
        </button>
      </main>
    );
  }

  // Eğer kullanıcı giriş yapmamışsa...
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Mahuf.com'a Hoş Geldiniz</h1>
      <p>Lütfen giriş yapın.</p>
      {/* Giriş yapmamış kullanıcıyı giriş sayfasına yönlendiren bir link. */}
      <a href="/giris" className="text-indigo-600 hover:text-indigo-800">Giriş Sayfasına Git</a>
    </main>
  );
}
