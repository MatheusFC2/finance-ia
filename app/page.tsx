import { Button } from "./_components/ui/button";
import LoginPage from "./login/page";

export default function Home() {
  // const { userId } = await auth();
  // if (!userOd) {
  //   redirect("/login");
  // }

  return (
    <div className="h-full items-center justify-center">
      {/* <UserButton showName /> */}
      <LoginPage />
    </div>
  );
}
