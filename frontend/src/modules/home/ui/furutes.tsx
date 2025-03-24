import { ButtonGradient } from "@/components/ui/buttonGradient"
import { BarChart, Coins, Link } from "lucide-react"

export default function Futures() {

    const features = [
        {
            icon: <Coins />,
            title:  "Track Assets in Real-Time",
            desc:  "Monitor changes in currencies and stocks prices to make timely decisions"
        },
        {
            icon: <Link />,
            title: "Integration with other Services",
            desc: "Connect your bank accounts and financial apps for seamless management of all your assets in one place"
        },
        {
          icon: <BarChart />,
            title:  "Financial Data Analysis",
            desc:  "Utilize our powerful analytical tools to assess income, expenses, and your portfolio's performance"
        },
    ]

    return (
        <section className="relative py-28">
            <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-600 dark:text-gray-300 justify-between gap-24 lg:flex md:px-8">
                <div className="max-w-xl">
                    <h3 className="text-foreground text-3xl font-semibold sm:text-4xl">
                        Create your unique <span className="tracking-[0.15rem] font-mono font-extrabold">strategy</span>
                    </h3>
                    <p className="mt-5 mb-7">
                       Take advantage of all our features for effective financial management, building your capital and much more
                    </p>
                    <ButtonGradient content="Learn More"/>
                </div>
                <div className="mt-12 lg:mt-0">
                    <ul className="grid gap-8 sm:grid-cols-2">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 bg-gray-700 text-cyan-400  rounded-lg flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 dark:text-gray-100 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div
              className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
              style={{
                background: "linear-gradient(152.92deg, rgba(99, 102, 241, 0.2) 4.54%, rgba(59, 130, 246, 0.26) 34.2%, rgba(99, 102, 241, 0.1) 77.55%)"
              }}
            ></div>
        </section>
    )
}
