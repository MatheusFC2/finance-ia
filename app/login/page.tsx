import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="relative h-full w-full">
        <Image
          src="/public/login.png"
          alt="Faça Login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
