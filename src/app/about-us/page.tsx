import { SectionBreak } from "@/components/SectionBreak";


export default function AboutUs() {

    const stats = [
        { label: 'Using only the best ingredients', value: 'Quality' },
        { label: 'Serving you with enthusiasm', value: 'Care' },
        { label: 'Cooking for you, with love', value: 'Compassion' },
    ];

    const values = [
        {
            "name": "Cook with Passion",
            "description": "Every dish we serve is a story of tradition, love, and warmth. Inspired by the rich heritage of Mexican cuisine, we pour our heart into every meal, ensuring each bite is a journey through flavors, colors, and textures that embody our commitment to culinary excellence and authenticity."
        },
        {
            "name": "Embrace the Family Spirit",
            "description": "At the heart of Mexican cuisine is the spirit of sharing and community. Our kitchen is more than a place of cooking—it's where bonds are formed, stories are shared, and laughter resonates. We invite you to join our table, where every guest is treated like family and every meal is a celebration of togetherness."
        },
        {
            "name": "Continuously Innovate",
            "description": "While we stay rooted in the traditional recipes passed down through generations, we also embrace innovation, blending ancient techniques with modern twists. This fusion approach allows us to offer unique, memorable dining experiences that honor the past while exciting the palate with new possibilities."
        }
    ]


    return (
        <>
            <div className="relative isolate">
                <div
                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-45"
                        style={{
                            clipPath:
                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                        }}
                    />
                </div>

                <div className="overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Our craft is our passion
                                </h1>
                                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                                La Playa Mexican Cafe was opened in July of 2006 in Harlingen Texas by the Trevino family. We enjoy bringing a bit of twist to the Harlingen community, differentiating from other Mexican restaurants with selecting ingredients to accent the traditional Mexican cuisine from interior Mexico for a flavorful experience, including our Margaritas. 
                                    We take pride in our Mexican heritage and want to share this rich history
                                    with you through warm meals and wonderful service.{" "}
                                    <span className="font-semibold">
                                        When you walk into La Playa Mexican Cafe, you're being greeted
                                        like family.
                                    </span>
                                </p>
                            </div>
                            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                    <div className="relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                                            alt=""
                                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                                        />
                                        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SectionBreak 
                className="mb-10 sm:mb-20"
                subClassOne="bg-transparent"
            />

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                Since opening our doors in 2006, our mission has remained the same: to serve the harlingen community
                                with fresh, quality Mexican cuisine that is authentic to tradition.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                <p>
                                    Our goal is to provide dynamic menu, providing delicious high quality meals, great tasting items for reasonable price. This is demonstrated through receiving awards accolades on La Playa tender marinated fajitas and tasting, fresh, and potent margaritas.
                                </p>
                                <p className="mt-10">
                                    Additionally, La Playa offers menu selections outside of traditional dishes such as quail, providing noteworthy culinary delights to the local community. We are truly grateful to be a part of Harlingen community!
                                </p>
                                <p className="mt-10">
                                    La Playa Mexican Cafe extends itself to the community by offering services with Dine-in, Curbside pickup, and DoorDash. As well as providing Catering that can be delivered and have a Private Room that can accommodate up to 75 people.
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image section */}
            <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
                <img
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                    alt=""
                    className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
                />
            </div>

            {/* Values section */}
            <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8 pb-32">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We operate by strict values in order to deliver the best food, with the best service, and with love.
                    </p>
                </div>
                <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {values.map((value) => (
                        <div key={value.name}>
                            <dt className="font-semibold text-gray-900">{value.name}</dt>
                            <dd className="mt-1 text-gray-600">{value.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </>
    );
};