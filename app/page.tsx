import { MyImage } from "@/components/MyImage";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "@/components/socialLinks";
import { Posts } from "@/components/posts";
// import Header from "@/components/Header";

export default async function Page() {
  return (
    <div className="w-full">
      <div className="sm:w-[55rem] w-full m-auto border border-[var(--bg)] rounded-sm">
        <div className="px-4 pt-4 w-full flex flex-col gap-8">
          <div className="flex sm:flex-row flex-col-reverse  gap-1 sm:justify-between justify-center items-center w-full">
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-medium flex justify-center sm:justify-start">
                Anupraj Varma
              </h1>
              <div className="flex flex-col sm:text-start text-center gap-4">
                <p className="text-md">
                  A sociopathic software developer who debugs code like
                  Rick&apos;s experiments—chaotic, unpredictable, yet always
                  groundbreaking.
                </p>
                <div className="flex gap-2 cursor-pointer justify-center sm:justify-start">
                  <Linkedin link="https://www.linkedin.com/in/anuprajvarma/" />
                  <Twitter link="https://x.com/Anupraj_varma" />
                  <Github link="https://github.com/anuprajvarma" />
                  {/* <Youtube link="https://www.youtube.com/@MarkVerma" /> */}
                </div>
              </div>
            </div>
            <div className="h-[8rem] w-[10rem] flex justify-center sm:justify-start">
              <MyImage picHeight={100} picWeight={100} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-medium">Featured Blogs</h1>
            <div className="flex flex-col gap-4 w-full cursor-pointer">
              <Posts />
              <div className="flex flex-col cursor-pointer">
                <div className="w-full flex justify-center">
                  <div className=" cursor-pointer w-6/12 flex items-center flex-col">
                    <Link
                      href="/blog"
                      className="w-4/12 flex flex-col justify-center items-center text-center"
                    >
                      <MdKeyboardDoubleArrowDown
                        size={60}
                        className=" cursor-pointer animate-bounce"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
