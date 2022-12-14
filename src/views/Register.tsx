import { useEffect, FunctionComponent } from "react";
import { DashBoard } from "../components/layout/DashboardTemplate";
import { Text } from "../components/custom/Typography";
import Link from "next/link";
import { Input } from "../components/custom/Input";
import { FaUser } from "react-icons/fa";

export interface RegisterPageProps { }

const RegisterPage: FunctionComponent<RegisterPageProps> = (): JSX.Element => {
    return <DashBoard path="/Register">
        <div className="w-full pt-8 justify-center items-center flex flex-col container mx-auto">
            <form className="gap-4 p-8 w-[420px]">
                <Text className="text-center text-[24px] mb-4">Log In</Text>
                <div className="flex flex-col items-center">
                    <div className="flex p-4 h-20 w-full">
                        <Input id="loginId" placeholder="Username" />
                    </div>
                    <div className="flex p-4 h-20 w-full">
                        <Input id="password" placeholder="Password" />
                    </div>
                    <div className="flex w-8 h-8">
                        <Input id="remember" type="checkbox"/>
                    </div>
                    <div className="flex">
                        <button className="bg-black px-8 py-4 text-white">confirm</button>
                    </div>
                </div>
            </form>
        </div>
    </DashBoard>
}

export default RegisterPage;