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
                <div className="flex flex-col">
                    <div className="flex p-4 h-20 w-full">
                        <Input id="loginId" placeholder="Username" />
                    </div>
                    <div className="flex p-4 h-20 w-full">
                        <Input id="password" placeholder="Password" />
                    </div>
                    <div className="flex flex-row w-8 h-8 px-6">
                        <div className="flex mr-2">
                            <input className="bg-white active:bg-[#000]" id="remember" type="checkbox" />
                        </div>
                        <div className="flex items-center">
                            <p className="mr-1 text-[#999]">Save</p>
                            <p className="text-[#999]">ID</p>
                        </div>
                    </div>
                    <div className="flex w-full px-4 py-4">
                        <button className="bg-black px-8 py-4 text-white w-full rounded-md" type="submit">confirm</button>
                    </div>
                </div>
            </form>
        </div>
    </DashBoard>
}

export default RegisterPage;