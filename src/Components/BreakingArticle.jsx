import '../Styles/articles.css';

const BreakingArticle = () => {
  return (
    <main className='single_article'>
      <h1>Successful Entrepreneur Sets Sights on NZ Tech Industry</h1>
      <img src={require('../Images/working.jpg')} alt='office working' />
      <h6>Written by Martin O'Neill</h6>
      <h6>Created: 5 mins ago</h6>
      <p id='article-body'>
        Bobby Nagra, a revered entrepreneur from the UK has announced today that
        he is moving to New Zealand to collaborate with an as yet, unrevealed
        company to partner with in the tech sector. During the press conference
        Bobby gleaned with excitement and energy as he made clear he is "more
        ready than ever to take on a new and exciting challenge". Famed for his
        attention to detail as well as his ability to take initiative and
        appetite for taking on big challenges, he says that he is "looking
        forward to this next chapter in his life".
        <br />
        <br />
        For a young man Bobby has achieved quite a lot. After graduating from
        The University of Manchester in 2017 with a First Class Masters Degree
        in Engineering, Bobby worked his way up to becoming a Chartered Engineer
        - A very highly regarded and internationally recognised status of
        competence and technical problem-solving ability. It is well known that
        Bobby has been applying these exact problem-solving abilities in the
        ever-changing world of Technology, and with great success. It is thus no
        surprise that Bobby has made this announcement today, albeit, the move
        away from the UK has come as quite a shock to many.
        <br />
        <br />
        Most recently, Bobby sold his minority stake in a successful Property
        Development business which he co-founded. At its peak the business had
        combined assets worth over an estimated £16m in Gross Development Value
        (GDV). GDV is a term which is used to represent the end value of a
        property project(s).
        <br />
        <br />
        When asked why he decided to sell his stake Bobby stated that he "came
        to the realisation during the 2-years during the Covid-19 pandemic" that
        he was "putting himself under a lot of pressure so early on his
        relatively short career thus far, by juggling too many roles" and thus,
        wanted to focus his energy solely on a new challenge within the
        ever-evolving Tech industry. He also cited 'burnout' as a key factor in
        his decision-making.
        <br />
        <br />
        Bobby closed his press-conference by signalling that the company he is
        set to work with is aligned with his ambitions and has "the perfect
        balance between innovation, culture and work-life balance where its
        employees can thrive". When asked about is long-terms ambitions, Bobby
        stated that he can see himself remaining in the country for the
        foreseeable future due to it's progressive outlook and world-renowned
        beauty. What's clear is that New Zealand will be getting a real asset in
        someone who has the potential to achieve big things there.
      </p>
      <br />
      <em>This is a breaking news story. More to follow.</em>
      <br />
      <br />
    </main>
  );
};

export default BreakingArticle;
