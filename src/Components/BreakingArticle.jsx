import '../Styles/articles.css';

const BreakingArticle = () => {
  return (
    <main className='single_article'>
      <h1>Successful Entrepreneur Sets Sights on NZ Tech Industry</h1>
      <img src={require('../Images/working.jpg')} alt='office working' />
      <h6>Written by Martin O'Neill</h6>
      <h6>Created: 5 mins ago</h6>
      <p id='article-body'>
        Bobby Nagra, a successful entrepreneur from the UK has announced that he
        is now living in New Zealand and that he is "more ready than ever to
        take on a new and exciting challenge". Famed for his attention to detail
        as well as his ability to take initiative and appetite for taking
        calculated risks, he says that he is "looking forward to this next
        chapter in his life" after pivoting from equally successful careers in
        Engineering and Project Management which he began in 2017 after
        graduating from The University of Manchester with a First Class Masters
        Degree.
        <br />
        <br />
        Most recently, Bobby sold his minority stake in a successful Property
        Development business which he co-founded. At its peak the business had
        combined assets worth over an estimated £16m in Gross Development Value.
        <br />
        <br />
        When asked why he decided to sell his stake Bobby stated that he "came
        to the realisation during the 2-years during the Covid-19 pandemic" that
        he was "putting himself under a lot of pressure so early on his
        relatively short career thus far, by juggling too many roles" and thus,
        wanted to focus his energy solely on a new and every-changing industry.
        He also cited 'burnout' as a key factor in his decision-making.
        <br />
        <br />
        Bobby closed his press-conference by making it clear that he is looking
        to join a company which is aligned with his desire to be at the
        cutting-edge of the technology sector in NZ and which has "the perfect
        balance between ambition, culture and work-life balance" in a country
        which he says he can see himself remaining in for the foreseeable future
        due to it's progressive outlook and world-renowned beauty.
      </p>
      <br />
      <em>This is a breaking news story. More to follow.</em>
      <br />
      <br />
    </main>
  );
};

export default BreakingArticle;
