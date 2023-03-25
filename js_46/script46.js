const testimonialsContainer = document.querySelector('.testimonial-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://i.picsum.photos/id/408/100/100.jpg?hmac=uVY1YwYsRbEEWFxlrewgehvUDUkdFxK_koR5rf9VF9s',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://i.picsum.photos/id/507/100/100.jpg?hmac=Q_W2AeL6j99ZqAhq4voDJ6y81yig9c3mxQ4keiWuh8o',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://i.picsum.photos/id/263/100/100.jpg?hmac=Uk7nKB-DCHjYn6uK2S2A6-fiGdjE5-4XQO5Fe-ltnYQ',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'Rene Sims',
        position: 'Receptionist',
        photo: 'https://i.picsum.photos/id/502/100/100.jpg?hmac=shDQYWWQj7Ci0V05tzKdweuNohX-ftc5x6oCd-k-CQ4',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'Jonathan Nunfiez',
        position: 'Graphic Designer',
        photo: 'https://i.picsum.photos/id/408/100/100.jpg?hmac=uVY1YwYsRbEEWFxlrewgehvUDUkdFxK_koR5rf9VF9s',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'Sasha Ho',
        position: 'Accountant',
        photo: 'https://i.picsum.photos/id/405/100/100.jpg?hmac=3JjgY2syXn-tL0ZmvMmhM92cqrHyn1ivDlek8EvhptQ',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    },
    {
        name: 'Veeti Seppanen',
        position: 'Director',
        photo: 'https://i.picsum.photos/id/527/100/100.jpg?hmac=f1pF6Fs0Ec7yXfnHPQwNi6Yh24hQyuybpCrIu_isS64',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sit, veniam sunt doloribus iure, consequuntur amet, fugiat quidem ab quam nulla eius hic! Soluta quo voluptatem vero expedita debitis quod consequuntur ipsam, hic nihil dolore dicta harum rerum illum doloribus, id repudiandae porro reiciendis architecto."
    }
]

let idx = 1;

function updateTestimonial() {

    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)
