import React from 'react';

interface Testimonial {
    name: string;
    role: string;
    text: string;
    color: string;
}

export const Testimonials: React.FC = () => {
    const testimonials: Testimonial[] = [
        {
            name: "Della Rosa",
            role: "CTO of Medicare",
            text: "Lorem ipsum dolor sit amet consectetur. Nulla arcu et nibh mattis faucibus hunc in tellus. Tincidunt malesuada diam in elementum.",
            color: "from-blue-400 to-blue-600"
        },
        {
            name: "Mitch Evans",
            role: "CEO of Medicare",
            text: "Phasellus verus donec, vulputat vestibulum nulla. Id rholin eget ag sit in amet arcu accumsan. Iaculis gravida felis ut vestibulum pellentesque aut dolar pulvinar.",
            color: "from-purple-400 to-purple-600"
        },
        {
            name: "Ricky Dion",
            role: "CMO of Medicare",
            text: "Lloureet tincidunt eget cursitor sit stem ullamcorper curus. Pretium fringilla lectus aliquet quam adipiscing. Fells habitasse duis blandit sed urnd sem.",
            color: "from-pink-400 to-pink-600"
        }
    ];

    return (
        <section className="py-20 px-6 bg-white/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        What Our Users Are Saying<br />About Medicare
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialCard: React.FC<Testimonial> = ({ name, role, text, color }) => (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">
        <p className="text-gray-600 mb-8 leading-relaxed">
            {text}
        </p>
        <div className="flex items-center gap-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                {name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
                <div className="font-bold text-gray-900">{name}</div>
                <div className="text-sm text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);