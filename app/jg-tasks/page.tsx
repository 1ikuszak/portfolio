import DynamicImage from "@/components/dynamic-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function JgTasks() {
  return (
    <main className="container mx-auto">
      <section className="py-10">
        <h1 className="mb-4 text-5xl lg:text-7xl 2xl:text-8xl">
          JG Office Management
        </h1>
        <div className="border-b">Client Project</div>
      </section>
      <section className="mb-32 hidden lg:block">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-1.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-2.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-3.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-4.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-5.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-6.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-7.png" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative aspect-video h-full w-full">
                <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-8.png" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-white hover:bg-transparent" />
          <CarouselNext className="bg-white hover:bg-transparent" />
        </Carousel>
      </section>
      <section className="mb-32 grid grid-cols-1 gap-4 lg:hidden">
        <div className="relative aspect-video h-full w-full">
          <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-1.png" />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-2.png" />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-3.png" />
        </div>
        <div className="relative aspect-video h-full w-full">
          <DynamicImage url="https://lukaszglica-portfolio.s3.eu-north-1.amazonaws.com/jg-tasks-4.png" />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-20 pb-64 md:grid-cols-2">
        <div>
          <h1 className="mb-2 text-3xl">Project Overview</h1>
          <div className="">
            <p className="font-ibmPlex">
              The application is designed to optimize task management and
              accounting systems. Users can enter tasks with detailed
              information, track their status, and filter and sort tasks as
              needed. Advanced filters are available and can be loaded
              dynamically. <br /> The web application was built using the
              Next.js stack, with React, Tailwind CSS, and Supabase for the
              database and authentication system. I used TanStack Table for
              builidng table, Recharts for data visualization, React Virtuoso
              for virtualization and Tanstack querry for infinite scrolling
              feature
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-3xl">Challenges and Solutions</h1>
          <div className="space-y-6">
            <p className="font-ibmPlex">
              Initially, the application faced performance issues when handling
              over 10,000 tasks. To address this, I implemented table
              virtualization using React Virtuoso. This approach allows tasks to
              render dynamically based on the visible window, which improves
              performance. While the virtualization improved usage performance,
              the initial loading time remained lengthy. To tackle this, I
              integrated TanStack Query to load additional rows as users scroll
              to the end of the table. This setup fetches 50 new rows at a time
              and continues as needed. Integrating this with filters, sorting,
              and search functionality was challenging, but leveraging
              PostgreSQL’s database functions helped streamline the process.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-3xl">Additional Features</h1>
          <div className="space-y-6">
            <p className="font-ibmPlex">
              The application includes role-based access control. Some users
              have read-only access, while others can edit, and a select group
              has access to a dashboard with visualized data. This dashboard
              includes KPIs for comparing company performance with previous
              months, which, though initially non-essential, has become a
              valuable addition.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-3xl">Development Process</h1>
          <div className="space-y-6">
            <p className="font-ibmPlex">
              The entire development process took about four months, during
              which I extensively tested and learned. I had to start over twice
              before completing the project. Despite these setbacks, the
              application has been in use by the company for over six months.
              Throughout the project, I balanced development with my full-time
              studies, which added to the complexity of the process.
            </p>
          </div>
        </div>
        <div>
          <h1 className="mb-2 text-3xl">Results</h1>
          <div className="space-y-6">
            <p className="font-ibmPlex">
              12,000+ new tasks added by users. 12 team members use the tool
              daily. 3 offices optimized with the new system The application
              continues to be optimized and updated. I used Webpack Bundle
              Analyzer to enhance performance and made various cosmetic
              adjustments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
