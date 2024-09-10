import imag1 from "../images/blog-image-1.jpg"
import imag2 from "../images/blog-image-2.jpg"
export function Blogpost1() {
  return (
    <section class="blog-post">
      <p class="post-date">11/12/20</p>
      <h2>On the Street in Brooklyn</h2>
      <img src={imag1} alt="Street in Brooklyn"/>
      <p class="post-content">
        <span class="dropcap">C</span>ray ipsum, dolor sit amet consectetur
        adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam
        inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit
        officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus
        est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut
        voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla
        eius quae corrupti optio atque ut. Repellendus molestias doloribus
        recusandae, itaque voluptatibus.
      </p>
      <a href="#" class="continues">
        Continues ...
      </a>
    </section>
  );
}

export function Blogpost2() {
    return(
        <section class="blog-post">
    <p class="post-date">11/11/20</p>
    <h2>Vintage in Vogue</h2>
    <img src={imag2} alt="Vintage in Vogue"/>
    <p class="post-content">
      <span class="dropcap">S</span>elfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestias doloribus recusandae, itaque voluptatibus placeat repellat deserunt.
    </p>
    <a href="#" class="continues">Continues ...</a>
  </section>
    )
}