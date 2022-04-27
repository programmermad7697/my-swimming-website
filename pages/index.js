import Head from 'next/head'
import Header from '../components/Header'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Swimming Madness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="pt-14 pl-20 pb-16">
        <motion.div
          className="w-full max-w-2xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300 sm:h-80 sm:p-5 md:h-72"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
        >
          <h1 className="text-5xl">Welcome to Swimming Madness!</h1>
          <p className="font-serif text-2xl">
            In this website you will learn a lot about swimming. <br />
            You will know the History of Swimming, Benifits of Swimming, The
            Different Styles or Strokes of Swimming, Disadvantages of Swimming.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
        >
          <div className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300">
            <h1 className="text-3xl font-bold">About Swimming</h1>
            <p className="font-serif text-xl">
              Swimming is Water-based sport that takes place in a Swimming Pool
              or in Open Water. Swimming burns lots of calories, it improves
              your endurance, builds muscle strenght. It also improves
              cardiovascular fitness.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.6,
              },
            },
          }}
          id="history_of_swimming"
        >
          <h1 className="text-3xl font-bold">History of Swimming</h1>
          <br />

          <p className="font-serif text-xl">
            Organized Swimming began in 1800s and 1900s with the creation of
            swimming associations and clubs that competed against each other.
            Mathew Webb swam the English Channel in August 24th, 1875. He was
            the greatest swimmer who was the first person who successfully swam
            the English Channel without any assistance.
            <br />
            <br />
            Competitive swimming grew popularity during the 1890s. The first
            modern Olympic Games was in the year 1896, which was conducted in
            Athens. That time the races were 50, 100, 220, 440, 880-yard and One
            Mile Freestyle, the 100 yard Backstroke and 440-yard Breastroke, and
            a 4 <span className="font-normal">x</span> 50-yard Freestyle Relay.
            <br />
            <br />
            By 20th Century, swimming had become mainstream. Indoor Swimming
            Pools were built, many places with population over 20,000 had
            outdoor pools. The first time women participated in the Olympic
            Games was in 1912 in Stockholm. Johnny Weissmuller was the first
            person who swam 100 meters in less than 1 minute.
            <br />
            <br />
            Today swimming is the second most popular exercise activity in
            United States(US). Many high schools and colleges have competitive
            swimming. Now Swimming is one of the most popular sport in the
            Olympic Games
          </p>
        </motion.div>

        <div
          className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300"
          id="benifits_of_swimming"
        >
          <h1 className="text-3xl font-bold">Benifits of Swimming</h1>

          <br />

          <h2 className="text-xl font-bold">1. Low Impact</h2>
          <p className="font-serif text-xl">
            There is no ground impact when you swim, and so you protect the
            joints from strain. Water aerobics classes are desirable for this
            reason because, even if you do a jump and hit the bottom of the
            pool, you do so with less force because you're buoyant in the water.
          </p>

          <br />

          <h2 className="text-xl font-bold">
            2. Can be continued for Lifetime
          </h2>
          <p className="font-serif text-xl">
            Because there is no impact on swimming, it can be continued{' '}
            <span className="font-bold">Lifetime</span>. There are who still
            swim at the age 100 to 104 years old age group!!!
            <span className="text-xl">🤯</span>
            <span className="text-xl">🤯</span>
          </p>

          <br />

          <h2 className="text-xl font-bold">3. Burns calories</h2>
          <p className="font-serif text-xl">
            Swimming burns lots of calories. It burns close 700 calories or more
            depending on how efficiently you swim, and how buoyant you are.
          </p>

          <br />

          <h2 className="text-xl font-bold">4. Accessibility</h2>
          <p className="font-serif text-xl">
            Rather than having to join a gym, swimming is an exercise you can do
            almost anywhere if you have access to a swimming pool in a
            community.
          </p>

          <br />

          <h2 className="text-xl font-bold">5. Sleep</h2>
          <p className="font-serif text-xl">
            Working out can tire your body so you can get a good sleep during
            the night. People above age 55-60 years old of age group who suffer
            from insomnia experienced improved sleep quality.
          </p>
        </div>

        <div
          className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300"
          id="styles_strokes_of_swimming"
        >
          <h1 className="text-3xl font-bold">
            The Different Styles or Strokes of Swimming.
          </h1>

          <br />

          <h2 className="text-2xl">
            There are four types of Strokes in Swimming:-
          </h2>
          <br />
          <p className="font-serif text-2xl">Butterfly</p>
          <p className="font-serif text-2xl">Backstroke</p>
          <p className="font-serif text-2xl">Breaststroke</p>
          <p className="font-serif text-2xl">Freestyle (or) Front Crawl</p>
          <br />

          <h2 className="text-2xl font-bold">Butterfly</h2>
          <p className="font-serif text-xl">
            This stroke is a difficult stroke, which requires perfect timing and
            good leg power.
          </p>
          <br />

          <h2 className="text-2xl font-bold">Backstroke</h2>
          <p className="font-serif text-xl">
            The Backstroke is easier than Buttterfly and similar to Front Crawl
            (or) Freestyle, which involves alternate arm rotation and flutter
            kick, on your back.
          </p>
          <br />

          <h2 className="text-2xl font-bold">Breaststroke</h2>
          <p className="font-serif text-xl">
            Breastroke, which similar to Butterfly is also a hard stroke but
            slightly easier than butterfly. This stroke also requires a very
            hard kick and good leg power.
          </p>
          <br />

          <h2 className="text-2xl font-bold">Front Crawl (or) Freestyle</h2>
          <p className="font-serif text-xl">
            This is the most popular stroke. It the easiest among all the
            strokes. It is also easy learn compared to other strokes.
          </p>
        </div>

        <div
          className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300"
          id="equipments_needed_for_swimming"
        >
          <h1 className="text-3xl font-bold">Equipment needed for Swimming</h1>
          <br />
          <p className="text-2xl font-bold">
            There are many equipments needed for swimming.
          </p>
          <br />
          <p className="font-serif text-xl">
            1. Googles <br />
            2. Cap <br />
            3. Jammer or Swimsuit <br />
            4. Kickboard <br />
            5. Hand Paddles <br />
            6. Pull Buoys <br />
            7. Fins <br />
          </p>
        </div>

        <div
          className="mt-24 w-full max-w-4xl items-center justify-center rounded-lg bg-gradient-to-br from-blue-200 via-blue-300 to-blue-500 p-10 shadow-xl shadow-blue-300"
          id="disadvantages_of_swimming"
        >
          <h1 className="text-3xl font-bold">Disadvantages of Swimming</h1>
          <br />

          <h2 className="text-xl font-bold">1. Shoulder Injury</h2>
          <p className="font-serif text-xl">
            This is the most common Swimming injury which people get. 47% of
            collegiate swimmers and 48% of masters swimmers have experienced
            shoulder pain that lasted more than 3 weeks.
          </p>
          <br />

          <h2 className="text-xl font-bold">2. Knee Injury</h2>
          <p className="font-serif text-xl">
            This is also another common pain. A study by the Clinics in Sports
            Medicine said that, the Knee injury is second most common injury
            among the competitive swimmers. This can be caused due to incorrect
            position of leg while doing Breastroke.
          </p>
          <br />
          <p className="font-serif text-xl">
            Other common conditions swimmers experience are muscle cramps.
            Muscle cramps or not injuries but still creats pain and discomfort
            the swimmers. Swimmers mostly get this while using the fins.
          </p>
        </div>
      </main>
    </div>
  )
}
