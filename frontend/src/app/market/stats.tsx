export default function Stats() {

    const stats = [
        {
            data: "750M",
            title: "Trade volume"
        },
        {
            data: "50K+",
            title: "Total users"
        },
        {
            data: "200+",
            title: "Cryptocurrencies"
        },
        {
            data: "1M+",
            title: "Transactions"
        },
    ]

    return (
        <section className="pt-20 pb-24">
            <div className="max-w-screen-2xl mx-auto px-4  md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-3xl font-semibold sm:text-4xl">
                      Revolutionizing the Crypto Market
                    </h3>
                    <p className="mt-3 opacity-80">
                      Explore the future of digital finance with our cutting-edge trading platform, where seamless transactions meet real-time market insights.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {
                            stats.map((item, idx) => (
                                <li key={idx} className="text-center px-12 md:px-16">
                                    <h4 className="text-4xl text-blue-500 font-semibold">{item.data}</h4>
                                    <p className="mt-3 font-medium">{item.title}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
