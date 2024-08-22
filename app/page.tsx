import { AsciiScene } from "@/components/3d/ascii-scene";
import { Crystal } from "@/components/3d/crystal-model";
import { BlobScene } from "@/components/blob-scene";
import DynamicImage from "@/components/dynamic-image";
import { Icons } from "@/components/icons";
import { VideoComponent } from "@/components/video-component";
import { VideoSkeleton } from "@/components/video-skeleton";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col">
      <section className="relative">
        <Suspense fallback={<VideoSkeleton />}>
          <VideoComponent url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/portfolio-banner.mp4" />
        </Suspense>
      </section>

      <section className="w-full">
        <div className="mx-auto gap-2 px-2 py-10 lg:grid lg:grid-cols-5 lg:py-20 2xl:py-40">
          <div className="col-span-3">
            <h1 className="mb-2 text-7xl lg:text-8xl 2xl:text-9xl">
              Lukasz Glica
            </h1>
            <p className="mb-2 max-w-sm font-ibmPlex text-lg leading-tight tracking-widest lg:text-xl 2xl:text-2xl">
              I’m a Poland-based <br />
              Frontend developer
              <br />
              and UI/UX designer.
            </p>
          </div>
          <div className="col-span-2 grid h-full w-full grid-rows-3 gap-2">
            <div className="relative row-span-2 h-24 w-full bg-secondary font-ibmPlex text-xl lg:h-full 2xl:text-2xl">
              <div className="absolute bottom-2 left-2">
                4+ years of experience
              </div>
            </div>
            <div className="row-span-1 grid h-full w-full grid-cols-3">
              <div className="flex h-12 w-full items-center justify-center bg-primary font-ibmPlex text-xl text-white lg:h-full 2xl:text-2xl">
                FRONTEND
              </div>
              <div className="flex h-12 w-full items-center justify-center bg-accent font-ibmPlex text-xl text-white lg:h-full 2xl:text-2xl">
                UI
              </div>
              <div className="flex h-12 w-full items-center justify-center bg-secondary font-ibmPlex text-xl lg:h-full 2xl:text-2xl">
                UX
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-0 lg:py-20 2xl:py-40">
        <div className="gap-2 lg:grid lg:grid-cols-5">
          <div className="relative bg-black py-2 pl-2 text-white md:h-auto lg:col-span-2">
            <h1 className="mb-6 text-6xl lg:text-7xl 2xl:text-9xl">I</h1>
            <p className="text-[8px] text-white md:text-[11px] 2xl:text-xs">
              ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠉⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⡀⠀⠀⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠀⠀⠀⠀⢀⠀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⢸⣷⣤⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⣤⣾⡇⠀⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⢀⣴⣾⣿⣿⣿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⣿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠛⠛⠛⠛⠛⠛⠛⠉⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿⣿⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿⣶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⠂⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿
              ⣽⣿⣿⣿⣿⣿⣿⣿⣿⣇⠀⠀⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⢿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⡿⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡀⠀⠈⣿⡿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠻⢿⡿⠁⠀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠖⠛⠛⠛⢶⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⡶⠛⠛⠛⠲⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⣰⣿⠁⠀⠀⠈⠀⠀⠙⢆⠀⠀⠀⠀⠀⠀⠀⡰⠋⠀⠀⠁⠀⠀⠈⣿⣆⠀⠀⠀⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⠀⠀⠀⠀⢠⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⡄⠀⠀⠀⠀⠀⠘⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣿⠿⠋⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⢠⡇⠀⠀⠀⠀⠀⢸⡄⠀⠀⠀⠀⠀⠀⠀⢸⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠙⠿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⡿⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⣿⣄⠀⠀⠀⠀⠀⠀⣼⠇⠀⠀⠀⠀⠀⠸⣧⠀⠀⠀⠀⠀⠀⣠⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣿⣿⣿
              ⣽⣿⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⣶⣶⣶⣶⠾⠋⠀⠀⠀⠀⠀⠀⠀⠙⠷⣶⣶⣶⣶⠿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠤⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠤⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿
              ⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡄⠀⠀⠀⠀⠀⠀⠘⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⠀⢠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠀⠀⠀⠀⠀⠀⠀⠙⠲⢤⣄⣀⣀⣠⡤⠖⠛⠁⠀⠈⠙⠲⢤⣄⣀⣀⣠⡤⠖⠋⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣀⣀⣀⣤⣤⣤⣤⣤⣄⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣠⣤⣤⣤⣤⣤⣀⣀⣀⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
              ⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            </p>
            <h1 className="mb-4 text-6xl lg:mb-0 lg:text-7xl 2xl:text-9xl">
              creating
              <br />
            </h1>
            <p className="max-w-lg font-ibmPlex text-base lg:absolute lg:bottom-2 lg:left-2 lg:text-xl 2xl:text-4xl">
              My approach is to keep things simple, <br /> I believe that
              simplicity is the key <br className="flex 2xl:hidden" /> to great
              design <br />
              but simplicity ≠ boring <br />
              It’s where creativity thrives.
            </p>
          </div>
          <div className="relative mb-6 mt-6 h-[580px] lg:col-span-3 lg:mb-0 lg:h-screen lg:min-h-[820px]">
            <Suspense
              fallback={
                <div className="flex flex-1 items-center justify-center">
                  <div className="text-4xl">loading...</div>
                </div>
              }
            >
              <AsciiScene>
                <Crystal />
              </AsciiScene>
            </Suspense>
            <div className="bottom-2 right-2 hidden lg:absolute lg:block">
              <p className="mb-2 font-ibmPlex text-xs font-bold text-accent 2xl:text-base">
                // INNOVATION & EXPLOARATION
              </p>
              <p className="mb-2 max-w-48 font-ibmPlex text-sm leading-tight tracking-tight 2xl:max-w-xs 2xl:text-xl">
                I’m always eager to test the newest libraries and open to trying
                out fresh ideas
              </p>
            </div>
            <div className="bottom-2 left-2 hidden lg:absolute lg:block">
              <p className="mb-2 font-ibmPlex text-xs font-bold leading-tight tracking-tight text-accent 2xl:text-base">
                // PERFORMANCE
              </p>
              <p className="mb-2 max-w-48 font-ibmPlex text-sm 2xl:max-w-xs 2xl:text-xl">
                I value performance just as much as functionality and aesthetics
              </p>
            </div>
            <div className="right-2 top-2 hidden lg:absolute lg:block">
              <p className="mb-2 font-ibmPlex text-xs font-bold leading-tight tracking-tight text-accent 2xl:text-base">
                // FUNCTIONALITY {">>"} CREATIVITY
              </p>
              <p className="mb-2 max-w-48 font-ibmPlex text-sm leading-tight tracking-tight 2xl:max-w-xs 2xl:text-xl">
                I design apps that prioritize function over form, focusing on
                practical tools rather than artistic displays
              </p>
            </div>
          </div>

          <div className="mx-auto w-full gap-4 space-y-4 px-2 md:grid md:grid-cols-2 md:space-y-0 lg:hidden">
            <div className="h-40 border p-2 md:h-auto">
              <p className="mb-2 font-ibmPlex font-bold text-accent">
                // INNOVATION & EXPLOARATION
              </p>
              <p className="mb-2 font-ibmPlex">
                I’m always eager to test the newest libraries and open to trying
                out fresh ideas
              </p>
            </div>

            <div className="h-40 border p-2 md:h-auto">
              <p className="mb-2 font-ibmPlex font-bold text-accent">
                // PERFORMANCE
              </p>
              <p className="mb-2 font-ibmPlex">
                I value performance just as much as functionality and aesthetics
              </p>
            </div>

            <div className="h-40md:h-auto border p-2">
              <p className="mb-2 font-ibmPlex font-bold text-accent">
                // FUNCTIONALITY {">>"} CREATIVITY
              </p>
              <p className="mb-2 font-ibmPlex">
                I design apps that prioritize function over form, focusing on
                practical tools rather than artistic displays
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full pt-20 2xl:pt-40">
        <div className="grid h-2 grid-cols-3 lg:h-4 2xl:h-6 2xl:grid-cols-7">
          <div className="col-span-2 bg-black 2xl:col-span-5"></div>
          <div className="col-span-1 bg-accent 2xl:col-span-2"></div>
        </div>

        <div className="lg:grid lg:grid-cols-3 2xl:h-auto 2xl:grid-cols-7">
          {/* DESKTOP IMAGES */}
          <div className="col-span-2 hidden gap-0 border-b border-r border-dotted border-black lg:grid lg:grid-cols-2 2xl:col-span-5 2xl:grid-cols-2">
            <div className="relative aspect-video h-full w-full xl:aspect-square 2xl:aspect-video">
              <DynamicImage
                alt="cc"
                url={
                  "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-2.png"
                }
              ></DynamicImage>
            </div>
            <div className="relative aspect-video h-full w-full xl:aspect-square 2xl:aspect-video">
              <DynamicImage
                alt="cc"
                url={
                  "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-4.png"
                }
              ></DynamicImage>
            </div>
            <div className="w-ful relative aspect-video h-full xl:hidden 2xl:block 2xl:aspect-video">
              <DynamicImage
                alt="cc"
                url={
                  "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-3.png"
                }
              ></DynamicImage>
            </div>
            <div className="relative aspect-video h-full w-full xl:hidden 2xl:block 2xl:aspect-video">
              <DynamicImage
                alt="cc"
                url={
                  "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-1.png"
                }
              ></DynamicImage>
            </div>
          </div>

          {/* MY STORY PHONE & IPAD & Desktop */}
          <div className="border-b border-dotted border-black lg:block lg:h-auto xl:col-span-1 2xl:col-span-2">
            {/* INTRO PHONE*/}
            <div className="relative mx-auto h-full p-2 md:hidden">
              <h2 className="mb-4 text-5xl">My Story</h2>
              <p className="mb-4 font-ibmPlex text-base 2xl:text-2xl">
                My journey began when COVID hit, sparking the idea to code a
                game. At that time, everyone was talking about Python, so I
                thought, why not give it a try? Instead of spending hours on
                tutorials, I jumped straight into the project. Six months later,
                I finished SnowFoxBall a fun game where you fly a snow-fox and
                shoot nasty bears. You can download it on Itch.io. And today,
                I’m still here, diving deeper into web development.
              </p>
              <Link
                target="_blank"
                href={"https://likuszak.itch.io/snowfoxball"}
                className="font-mono text-lg underline"
              >
                SNOWFOXBALL
              </Link>
            </div>
            {/* INTRO DESKTOP */}
            <div className="relative mx-auto hidden h-full p-2 lg:block">
              <h2 className="mb-4 text-5xl">My Story</h2>
              <p className="mb-4 font-ibmPlex text-sm leading-tight tracking-tight xl:text-base 2xl:max-w-sm 2xl:text-lg">
                My journey began when COVID hit, sparking the idea to code a
                game. At that time, everyone was talking about Python, so I
                thought, why not give it a try? Instead of spending hours on
                tutorials, I jumped straight into the project. Six months later,
                I finished SnowFoxBall a fun game where you fly a snow-fox and
                shoot nasty bears. You can download it on Itch.io. And today,
                I’m still here, diving deeper into web development.
              </p>
              <Link
                target="_blank"
                href={"https://likuszak.itch.io/snowfoxball"}
                className="lg:absolute lg:bottom-2 lg:left-2 lg:right-2"
              >
                <div className="flex items-center justify-between border px-4 py-4 font-mono text-base lg:flex 2xl:text-lg">
                  <span>SNOWFOXBALL</span>
                  <Icons.right_arrow />
                </div>
              </Link>
            </div>
            {/* INTRO IPAD */}
            <div className="mx-auto hidden p-2 md:block lg:hidden">
              <h2 className="mb-4 text-5xl">My Story</h2>
              <div className="mb-4 grid grid-cols-2 gap-10">
                <p className="mb-2 font-ibmPlex text-base 2xl:text-2xl">
                  My journey began when COVID hit, sparking the idea to code a
                  game. At that time, everyone was talking about Python, so I
                  thought, why not give it a try?Instead of spending hours on
                  tutorials, I jumped straight into the project.
                </p>
                <p className="mb-2 font-ibmPlex text-base 2xl:text-2xl">
                  Six months later, I finished SnowFoxBall a fun game where you
                  fly a snow-fox and shoot nasty bears. You can download it on
                  Itch.io. And today, I’m still here, diving deeper into web
                  development.
                </p>
              </div>
              <Link
                className="font-mono text-base underline lg:flex 2xl:text-lg"
                target="_blank"
                href={"https://likuszak.itch.io/snowfoxball"}
              >
                SNOWFOXBALL
              </Link>
            </div>
            {/* PHONE & IPAD IMAGES */}
            <div className="relative h-full w-full">
              <div className="mt-12 space-y-0 md:grid md:grid-cols-2 lg:hidden">
                <div className="relative aspect-video w-full">
                  <DynamicImage
                    alt="cc"
                    url={
                      "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-2.png"
                    }
                  ></DynamicImage>
                </div>
                <div className="relative aspect-video w-full">
                  <DynamicImage
                    alt="cc"
                    url={
                      "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-3.png"
                    }
                  ></DynamicImage>
                </div>
                <div className="relative aspect-video w-full">
                  <DynamicImage
                    alt="cc"
                    url={
                      "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-4.png"
                    }
                  ></DynamicImage>
                </div>
                <div className="relative hidden aspect-video w-full md:block">
                  <DynamicImage
                    alt="cc"
                    url={
                      "https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/snow-fox-1.png"
                    }
                  ></DynamicImage>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid h-[200px] grid-cols-2 border-b border-dotted border-black md:h-[300px] lg:h-[200px] lg:grid-cols-4">
          <div className="relative border-b border-r border-dotted border-black text-7xl">
            <h2 className="absolute bottom-0 left-0 text-5xl lg:text-7xl 2xl:text-8xl">
              Bio
            </h2>
            <Icons.right_arrow className="absolute bottom-0 right-2 size-6 md:size-8 2xl:size-10" />
          </div>
          <div className="relative flex items-center justify-center border-b border-dotted border-black lg:border-b-0 lg:border-r">
            <Icons.react className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">react.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <Icons.nextjs className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">next.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <Icons.typescript className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">typescript</p>
            </div>
          </div>
        </div>

        <div className="grid h-[200px] grid-cols-2 border-b border-dotted border-black md:h-[300px] lg:h-[200px] lg:grid-cols-4">
          <div className="relative flex items-center justify-center border-b border-r border-dotted border-black lg:border-b-0">
            <Icons.tailwind className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">tailwindcss</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-b border-r border-dotted border-black lg:border-b-0">
            <Icons.threejs className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">three.js</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <Icons.python className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">python</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <Icons.csharp className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">c#</p>
            </div>
          </div>
        </div>

        <div className="grid h-[200px] grid-cols-2 border-b border-dotted border-black md:h-[150px] lg:hidden lg:h-[200px]">
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <Icons.figma className="size-10 lg:size-12 xl:size-16" />
            <div className="lg:pr-auto absolute bottom-0 right-0 top-0 pr-4 pt-4 lg:left-0 lg:right-auto lg:pl-4">
              <div className="flex h-full flex-col gap-2 lg:gap-4">
                <span className="h-2 w-2 rounded-full border border-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
                <span className="h-2 w-2 rounded-full bg-black lg:h-2.5 lg:w-2.5"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">figma</p>
            </div>
          </div>
          <div className="relative flex items-center justify-center border-r border-dotted border-black">
            <p className="text-2xl">...</p>
          </div>
        </div>

        <div className="grid h-[200px] grid-cols-3 border-b border-dotted border-white bg-black lg:hidden">
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.davinci className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.photoshop className="size-6 text-secondary text-white" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.blender className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.afterefects className="size-6 text-secondary text-white" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.notion className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.premierepro className="size-6 text-secondary text-white" />
            </div>
          </div>
        </div>

        <div className="hidden h-[200px] grid-cols-4 border-b border-dotted border-white bg-black lg:grid">
          <div className="relative flex items-center justify-center border-r border-dotted border-white bg-white">
            <Icons.figma className="size-10 lg:size-12 xl:size-16" />
            <div className="absolute bottom-0 left-0 top-0 pl-4 pt-4">
              <div className="flex h-full flex-col gap-4">
                <span className="h-2.5 w-2.5 rounded-full border border-black"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
                <span className="h-2.5 w-2.5 rounded-full bg-black"></span>
              </div>
            </div>
            <div className="absolute bottom-0 left-1 border-dotted border-black">
              <p className="font-mono">figma</p>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.davinci className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.photoshop className="size-6 text-secondary text-white" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.blender className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.afterefects className="size-6 text-secondary text-white" />
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div className="row-span-1 flex items-center justify-center border-b border-r border-dotted border-white">
              <Icons.notion className="size-6 text-secondary text-white" />
            </div>
            <div className="row-span-1 flex items-center justify-center border-r border-dotted border-white">
              <Icons.premierepro className="size-6 text-secondary text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full bg-black lg:pt-20 2xl:pt-40">
        <div className="bg-black pt-20">
          <div className="flex">
            <h1 className="bg-white px-2 text-5xl lg:text-7xl 2xl:text-9xl">
              2024
            </h1>
          </div>
          <h1 className="mb-10 px-2 text-5xl text-white lg:text-7xl 2xl:text-9xl">
            Client & Personal Projects ©
          </h1>
          <div className="grid grid-cols-3 lg:grid-cols-4">
            <div className="col-span-1 grid grid-rows-5">
              <div className="flex items-center bg-gray pl-6">
                <h3 className="text-lg leading-tight tracking-tight text-white lg:text-3xl 2xl:text-5xl">
                  Legis Lumen
                </h3>
              </div>
              <div className="flex items-center bg-gray-2 pl-6">
                <h3 className="text-lg leading-tight tracking-tight lg:text-3xl 2xl:text-5xl">
                  JG-Marine <br className="md:hidden" />
                  Office APP
                </h3>
              </div>
              <div className="flex items-center bg-gray-3 pl-6">
                <h3 className="text-lg leading-tight tracking-tight lg:text-3xl 2xl:text-5xl">
                  JG-Marine <br className="md:hidden" /> Website
                </h3>
              </div>
              <div className="flex items-center bg-gray-4 pl-6">
                <h3 className="text-lg leading-tight tracking-tight lg:text-3xl 2xl:text-5xl">
                  Grootlab <br className="md:hidden" />
                  Studio
                </h3>
              </div>
              <div className="flex items-center bg-gray-5 pl-6">
                <h3 className="text-lg leading-tight tracking-tight lg:text-3xl 2xl:text-5xl">
                  CVR-FLY
                </h3>
              </div>
            </div>
            <div className="col-span-2 grid grid-rows-5">
              <div className="hidden flex-col items-center bg-gray px-2 py-2 lg:block 2xl:py-4">
                <p className="max-w-2xl font-ibmPlex text-xs text-white 2xl:text-base">
                  <span className="font-bold">//CLIENT WORK:</span> Developed
                  the frontend for an AI chatbot designed for lawyers, enabling
                  users to ask legal questions and receive precise answers.
                  Integrated a console that compiles relevant articles,
                  statutes, and PDF resources to support and verify responses.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 bg-gray px-2 py-2 lg:hidden lg:px-0 2xl:py-4">
                <div>
                  <p className="font-ibmPlex text-xs text-white">
                    <span className="font-bold">//CLIENT WORK:</span> Developed
                    the frontend for an AI chatbot designed for lawyers,
                    enabling users to ask legal questions and receive precise
                    answers. Integrated a console that compiles relevant
                    articles, statutes, and PDF resources to support and verify
                    responses.
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 bg-gray text-xs text-white">
                  <Link
                    className="flex h-8 w-full items-center justify-center border border-white"
                    href={"https://www.legislumen.com/"}
                    target="_blank"
                  >
                    visit page
                  </Link>
                  <Link
                    className="flex h-8 w-full items-center justify-center border border-white"
                    href={"/legis-lumen"}
                  >
                    case study
                  </Link>
                </div>
              </div>
              <div className="hidden flex-col items-center bg-gray-2 px-2 py-2 lg:block 2xl:py-4">
                <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                  <span className="font-bold">//CLIENT WORK:</span> An app
                  developed for JG Marine. It serves as an integrated system for
                  managing accounting, task management, invoice handling, and
                  more. Additionally, it features a dashboard that analyzes the
                  company’s KPIs and displays statistics through interactive
                  charts.
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 bg-gray-2 px-2 py-2 lg:hidden lg:px-0 2xl:py-4">
                <div>
                  <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                    <span className="font-bold">//CLIENT WORK:</span> An app
                    developed for JG Marine. It serves as an integrated system
                    for managing accounting, task management, invoice handling,
                    and more. Additionally, it features a dashboard that
                    analyzes the company’s KPIs and displays statistics through
                    interactive charts.
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 bg-gray-2 text-xs">
                  <div></div>
                  <Link
                    className="flex h-8 w-full items-center justify-center border border-black"
                    href={"/jg-tasks"}
                  >
                    case study
                  </Link>
                </div>
              </div>
              <div className="hidden flex-col items-center bg-gray-3 px-2 py-2 lg:block 2xl:py-4">
                <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                  <span className="font-bold">//CLIENT WORK:</span> Landing Page
                  for JG Marine
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 bg-gray-3 px-2 py-2 lg:hidden lg:px-0 2xl:py-4">
                <div>
                  <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                    <span className="font-bold">//CLIENT WORK:</span> Landing
                    Page for JG Marine
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 bg-gray-3 text-xs">
                  <Link
                    className="flex h-8 w-full items-center justify-center border border-black"
                    href={"https://jg-marine-website.vercel.app"}
                  >
                    website
                  </Link>
                  <div></div>
                </div>
              </div>
              <div className="hidden flex-col items-center bg-gray-4 px-2 py-2 lg:block 2xl:py-4">
                <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                  Landing page for my Webdev Agency
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 bg-gray-4 px-2 py-2 lg:hidden lg:px-0 2xl:py-4">
                <div>
                  <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                    Landing page for my Webdev Agency
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 bg-gray-4 text-xs">
                  <Link
                    className="flex h-8 w-full items-center justify-center border border-black"
                    href={"https://grootlabstudio.com/"}
                  >
                    website
                  </Link>
                  <div></div>
                </div>
              </div>
              <div className="hidden flex-col items-center bg-gray-5 px-2 py-2 lg:block 2xl:py-4">
                <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                  Landing page for my Web Design Agency
                </p>
              </div>
              <div className="flex flex-col justify-between gap-4 bg-gray-5 px-2 py-2 lg:hidden lg:px-0 2xl:py-4">
                <div>
                  <p className="max-w-2xl font-ibmPlex text-xs 2xl:text-base">
                    Landing page for my Web Design Agency
                  </p>
                </div>
                <div className="grid w-full grid-cols-2 gap-2 bg-gray-5 text-xs">
                  <Link
                    className="flex h-8 w-full items-center justify-center border"
                    href={"https://cvrfly.vercel.app/"}
                  >
                    website
                  </Link>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="col-span-1 hidden grid-rows-5 lg:grid">
              <div className="grid grid-cols-2 gap-2 bg-gray p-2 text-white">
                <Link
                  className="tracking-light flex items-center justify-center border border-white leading-tight"
                  href={"https://www.legislumen.com/"}
                  target="_blank"
                >
                  visit page
                </Link>
                <Link
                  className="tracking-light flex items-center justify-center border border-white leading-tight"
                  href={"/legis-lumen"}
                >
                  case study
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-gray-2 p-2">
                <div></div>
                <Link
                  className="tracking-light flex items-center justify-center border border-black leading-tight"
                  href={"/jg-tasks"}
                >
                  case study
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-gray-3 p-2">
                <Link
                  className="tracking-light flex items-center justify-center border border-black leading-tight"
                  href={"https://jg-marine.vercel.app/"}
                  target="_blank"
                >
                  visit page
                </Link>
                <div></div>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-gray-4 p-2">
                <Link
                  className="tracking-light flex items-center justify-center border border-black leading-tight"
                  href={"https://grootlabstudio.com/"}
                  target="_blank"
                >
                  visit page
                </Link>
                <div></div>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-gray-5 p-2">
                <Link
                  className="tracking-light flex items-center justify-center border border-black leading-tight"
                  href={"https://cvrfly.vercel.app/"}
                  target="_blank"
                >
                  visit page
                </Link>
                <div></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 p-4 lg:grid-cols-2 xl:p-7 2xl:p-10">
            <div className="relative col-span-1 aspect-video border border-dotted border-black bg-black lg:grid 2xl:p-10">
              <Suspense fallback={<div>loading...</div>}>
                <BlobScene />
              </Suspense>
              <p className="absolute bottom-1 left-2 font-ibmPlex text-sm text-white">
                lukasz.glica07@gmail.com
              </p>
              <p className="absolute right-2 top-1 font-ibmPlex text-sm text-white">
                +48 517 797 219
              </p>
            </div>
            <div className="flex items-center justify-center border border-dotted border-white py-10">
              <h1 className="font-ibmPlex text-5xl text-white xl:text-7xl 2xl:text-9xl">
                LETS <br /> WORK <br /> TOGETHER
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
