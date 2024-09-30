import Footer from "../components/footer";
import Header from "../components/header";
const LandingPage = () => {
    return (
        <>
            {/* Header */}
            <Header />
  
            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 bg-gray-50">
                <h1 className="text-4xl font-bold text-customSky mb-4">
                    Empower Your Teaching <span className="text-black">with SMS</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    A streamlined platform designed to make your teaching life easier. Manage classes, track progress, and stay organized all in one place.
                </p>
                <button className="bg-customBlue text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">
                    Get Started Today
                </button>
  
                {/* Illustration (Placeholder for now) */}
                <div className="mt-12">
                    <img
                        src="src/images/education_1.png"
                        alt="Teacher and Students"
                        className="max-w-full h-auto"
                    />
                </div>
            </section>
  
            {/* Built for Section */}
            <section className="bg-white py-16 border border-black max-w-7xl mx-auto mb-8">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Built for <span className="text-customSky">Teachers</span>, Inspired by <span className="text-customSky">Real Classrooms</span>
                        </h2>
                        <p className="text-gray-600 mt-4">
                            Because you didn’t become a teacher to drown in paperwork.
                        </p>
                    </div>
  
                    <div className="space-y-8 text-gray-700">
                        <p>
                            SMS was born from a simple idea: teaching should be about connecting with students, not battling administrative overload. We get it—lesson planning, grading, tracking student progress—it all adds up, fast. That's why we built SMS to help you reclaim your time, streamline the chaos, and put the focus back where it belongs: on your students.
                        </p>
                        <p>
                            Our platform was designed with teachers in mind, by people who understand the unique challenges of the classroom. From easy-as-pie grading tools to real-time student insights, we’ve packed SMS with everything you need to make your teaching life easier—without the unnecessary fluff.
                        </p>
                    </div>
                </div>
            </section>
  
            {/* Why We Exist Section */}
            <section className="py-16 border border-black max-w-7xl mx-auto">
                <div className="max-w-5xl mx-auto px-4 ">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Why We Exist?
                        </h2>
                    </div>
                    <p className="text-gray-700 text-center">
                        Because we believe that when teachers have the right tools, they can create magic in the classroom. SMS isn’t just software; it’s your new classroom sidekick. Whether you're a first-year teacher or a seasoned pro, we’re here to make sure you spend less time buried in admin tasks and more time doing what you do best: inspiring the next generation.
                    </p>
                </div>
            </section>
  
            {/* Features Section */}
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 text-left">
                            Features
                        </h2>
                        <p className="text-left">Your Classroom, Supercharged.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 ">
                        <div className="bg-customSky rounded drop-shadow-md"> 
                            <h5 className="font-bold mb-4 text-gray-800 m-2">
                                Command the Classroom, Without the Chaos
                            </h5>
                            <p className="text-gray-700 m-2">
                                "Juggling schedules, assignments, and lesson plans just got easier. Keep everything in one place and manage your class like a pro. Less clutter, more clarity."
                            </p>
                        </div>
                        <div className="bg-customSky rounded drop-shadow-lg">
                            <h5 className="font-bold mb-4 text-gray-800 m-2">
                                Plan Today, Teach Tomorrow
                            </h5>
                            <p className="text-gray-700 m-2">
                                "Create lesson plans that are as flexible as you are. Whether it’s a quick update or a full rework, our drag-and-drop planner makes it easy to build lessons that fit your teaching style."
                            </p>
                        </div>
                        <div className="bg-customSky rounded">
                            <h5 className="font-bold mb-4 text-gray-800 m-2">
                                Grading? Done in a Snap.
                            </h5>
                            <p className="text-gray-700 m-2">
                                "Say goodbye to late-night grading marathons. Our lightning-fast grading tools let you breeze through assessments and keep students informed, so you can get back to what really matters."
                            </p>
                        </div>
                        <div className="bg-customSky rounded">
                            <h5 className="font-bold mb-4 text-gray-800 m-2">
                                Student Progress? You’re Always in the Know.
                            </h5>
                            <p className="text-gray-700 m-2">
                                "Stop guessing. Get real-time insights into how your students are performing, where they’re struggling, and how you can help them succeed. Because every student matters."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-16 border border-black max-w-7xl mx-auto">
                <div className="max-w-5xl mx-auto px-4 ">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            How It Works:
                        </h2>
                    </div>
                    <p className="text-gray-700">
                        From Signup to Simplified, Here’s the Journey
                    </p>
                </div>
                <div>
                        <div className=" max-w-5xl mx-auto px-4 drop-shadow-lg">
                            <h5 className="font-bold mb-4 text-gray-800">
                                Step 1:
                            </h5>
                            <h5 className="font-bold mb-4 text-gray-800">
                                1-Minute Setup, No IT Degree Required
                            </h5>
                            <p className="text-gray-700">
                                Sign up, input your classes, and you’re ready to roll. No complicated tech talk. Just a few clicks, and you're in charge of a fully functioning, smarter classroom
                            </p>
                        </div>
                        <div className="max-w-5xl mx-auto px-4 drop-shadow-lg">
                            <h5 className="font-bold mb-4 text-gray-800">
                                Step 2:
                            </h5>
                            <h5 className="font-bold mb-4 text-gray-800">
                                Your Command Center: Everything You Need, All in One Place
                            </h5>
                            <p className="text-gray-700">
                                Once inside, you’ll have a beautifully simple dashboard—your new command center. Whether it’s managing lessons, tracking grades, or checking student progress, everything is right where you need it.
                            </p>
                        </div>
                        <div className="max-w-5xl mx-auto px-4 drop-shadow-lg">
                            <h5 className="font-bold mb-4 text-gray-800">
                                Step 3:
                            </h5>
                            <h5 className="font-bold mb-4 text-gray-800">
                                Transform Chaos into Calm
                            </h5>
                            <p className="text-gray-700">
                                As the weeks go by, watch your workload shrink. With everything from lesson planning to grading streamlined, you’ll finally have the headspace to focus on what you love most: teaching.
                            </p>
                        </div>
                </div>
            </section>
            {/* Last Section */}
            <section className="py-16 border border-black max-w-7xl mx-auto mt-8 mb-8">
                <div className="max-w-5xl mx-auto px-4 ">
                    <div className=" mb-8">
                        <h2 className="text-3xl font-bold text-gray-800">
                            Start Teaching <span className="text-customSky">Smarter</span> Today
                        </h2>
                    </div>
                    <p className="text-gray-700 ">
                        Join hundreds of teachers who have already simplified their workload with SMS.
                    </p>
                    <button className="bg-customBlue text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-600 transition">
                        Sign Up Now
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
  }
  
  export default LandingPage;  