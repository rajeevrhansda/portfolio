import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
`;
const Wrapper = styled.div`
width: 75%;
@media (max-width: 768px) 
{
    width: 100%;
}
`;
const Home = styled.div`
/* background:linear-gradient(transparent, #4db5ff, transparent); */
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;

@media (max-width: 768px) 
    {
        margin: 2em;
    }
`;
const ToggleBar = styled.div`
padding: 1em;
display: flex;
justify-content: end;
cursor: pointer;
`;
const ToggleIconContainer = styled.div`
    color: #4db5ff;
    font-size: 1.1em;
`;
const ToggleTextContainer = styled.div`
font-family: Font Awesome 6 Free;
font-weight: 900;
font-size: 1.1em;
`;

const Name = styled.h3`
font-weight: 900;
font-size: 3em;
margin-bottom: 1em;
@media (max-width: 768px) 
    {
        font-weight: 900;
        font-size: 2em;
    }
`;
const Title = styled.h2`
font-weight: 900;
font-size: 6em;
@media (max-width: 768px) 
    {
        font-weight: 900;
        font-size: 4em;
    }
`;
const Button = styled.button`
background-color: transparent;
color: #4db5ff;
width: max-content;
font-size: 1.5em;
padding: 0.5em;
border-radius: 10px;
border: 2px solid #4db5ff ;

`;




const Center = ({ darkMode, setDarkmode }) => {
    return (
        <Container>
            <Wrapper>
                <ToggleBar onClick={() => setDarkmode(!darkMode)}>
                    <ToggleIconContainer>
                        {darkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
                    </ToggleIconContainer>
                    <ToggleTextContainer>
                        {darkMode ? "Light" : "Dark"} Mode
                    </ToggleTextContainer>
                </ToggleBar>
                <Home>
                    <Name>Hi, I'm Rajeev Hansda</Name>
                    <Title>Full Stack </Title>
                    <Title>Web Developer</Title>
                    <div style={{ display: "flex", gap: "1em" }}>

                        <Button  >Download CV</Button>
                        <Button style={{ backgroundColor: "#4db5ff", color: "white" }}>Let's Talk</Button>
                    </div>
                </Home>
                <p id="google">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, velit perferendis quo maiores quaerat dolorem ratione voluptatibus temporibus recusandae, tempora nesciunt numquam corrupti qui? Quas ex aut nemo officiis dolor ratione? Magnam sed quisquam impedit culpa praesentium corporis ex labore doloribus, in accusamus suscipit facere voluptas commodi fuga magni aliquid repellendus. Dignissimos eum reiciendis sint earum doloremque sapiente repellat ut natus sunt minima magni fuga eaque voluptas amet, mollitia rerum nemo cum fugiat ullam culpa ipsam doloribus nostrum nihil neque. Doloribus, aliquid perferendis? Minus sed aspernatur atque voluptate! Ab repellendus consequuntur rem iste, quidem eius voluptate excepturi quisquam corporis id error iure incidunt nisi quos aliquid ipsa tempora? Labore repellendus, officiis dolorum, deserunt optio perferendis temporibus odit vero similique suscipit fugit nobis. Eius deleniti rerum quisquam error cumque magnam libero vel iusto sed, quam ex tenetur facilis incidunt qui officia. Molestiae ut doloribus repellat placeat dolorem deserunt veritatis, itaque obcaecati, dicta id praesentium impedit dolores eos! Repellat voluptate omnis laboriosam voluptates odit! Magnam similique dolorum veniam libero reprehenderit quam quaerat ducimus eos velit saepe sit, pariatur est magni fugiat harum hic sapiente nisi ad? Asperiores perferendis numquam nihil cumque perspiciatis mollitia nostrum cum aut accusantium rem eaque, architecto exercitationem temporibus, aspernatur optio natus error repudiandae dignissimos at autem, ducimus voluptatibus? Consequatur enim sit modi unde eius. Officia dignissimos sint deserunt sit at, praesentium earum neque, quas eius optio ipsa sunt delectus rerum unde dolor enim natus, ea provident aliquid perferendis soluta nisi quod saepe assumenda. Harum cum sit tempore reiciendis, soluta cumque nulla consequatur deleniti animi blanditiis rerum voluptatibus sint reprehenderit libero natus sed ipsa eius error eveniet necessitatibus laboriosam voluptas tempora? Neque minus odio obcaecati ab. Autem ad fugiat suscipit quod laboriosam quas earum voluptas nam quibusdam eaque unde aliquam sequi sint dolorum, eligendi numquam voluptatum alias eos, ducimus perspiciatis. Laboriosam saepe sunt eligendi laborum nihil. Dolorem ipsam explicabo culpa pariatur est? Veniam ex praesentium id distinctio, temporibus voluptatem a consequatur tempore voluptas reiciendis ut in vitae maxime iure minima ipsum, deserunt nihil magni eum fuga! Excepturi adipisci cum error debitis. Voluptatum odit necessitatibus beatae esse totam velit iusto, labore laudantium reprehenderit quo atque, et neque amet nostrum ducimus ipsam, cupiditate tenetur nam animi repellendus aliquid quam veniam laborum dignissimos. Quia fugiat sint nostrum magni, officia, praesentium explicabo, eos excepturi aliquid maxime veritatis voluptates animi provident laboriosam magnam modi. Dolores quisquam, culpa alias nemo omnis totam repellendus natus eos, ea fugiat quidem cupiditate doloremque enim asperiores incidunt labore aliquam assumenda vitae consectetur minima sint! Maiores voluptatibus blanditiis magnam eum suscipit mollitia repellendus nostrum placeat quia enim, harum nemo! Tempore corporis nihil maiores cumque illum dolorum magnam, voluptas, quasi aliquid omnis possimus eligendi! Nihil similique, cum et, rerum numquam tempora aliquam laborum accusamus modi asperiores tempore nemo optio exercitationem deleniti sint voluptates minima ex quos. Iure cum deserunt sit! Repellat laudantium, nesciunt natus facere quod obcaecati harum ratione illum ullam iusto. Porro, id. Rerum eaque consequuntur consectetur aspernatur nam repellendus nisi iure aliquid. Exercitationem qui debitis sequi eius eaque dicta quos possimus, reprehenderit explicabo tempora iste similique eligendi fuga asperiores fugiat? Architecto neque quis repellendus obcaecati? Aliquam magnam quibusdam alias quod minus omnis ea ut libero quam laudantium aliquid quis cumque repellat neque commodi, atque minima obcaecati assumenda aut maiores amet rerum. Minus blanditiis amet inventore, tenetur quasi maiores molestias ex quos! Tempore reprehenderit architecto voluptatem quos, ad earum laudantium ducimus nesciunt necessitatibus delectus cupiditate harum perferendis vel, asperiores, est perspiciatis quaerat quibusdam obcaecati ea. Nam quis, doloremque adipisci, quaerat similique maiores perspiciatis minima molestias accusantium aperiam qui rerum beatae laborum! At, voluptate ipsum exercitationem temporibus quo et aliquid iure ratione asperiores excepturi corrupti fuga. Praesentium temporibus illo autem quibusdam quam qui quis alias nihil culpa quae. Dicta, voluptatum voluptate sunt unde perferendis aspernatur vel illo error fuga placeat sit quas quam saepe ex sequi labore ut praesentium veritatis qui in explicabo rerum autem! Nulla beatae, eum repellat modi vel sed cum, nostrum omnis reiciendis pariatur, quo doloremque voluptas error quae accusantium magnam esse harum rerum optio unde. Corrupti impedit aperiam ut nisi non ad esse inventore, corporis laborum quos dolores aut et maiores. Aut eius consequatur mollitia nesciunt, dolorem est aspernatur provident voluptatibus, impedit minus in dolorum incidunt dicta, vero labore sapiente harum libero iusto. Corrupti impedit voluptates ducimus repellendus blanditiis ipsam et exercitationem inventore debitis non error, maiores amet eius! Repellat ullam architecto dolorem dicta quos cum asperiores eligendi vitae odio totam quod quasi laborum quia, placeat aut inventore ipsum. Provident exercitationem vitae, consequuntur atque laudantium inventore libero sit! Sequi, deleniti? Sit quia ea dolores voluptates facilis totam adipisci alias eveniet sapiente natus iste dolor earum aliquid eum reiciendis doloribus iure tempora enim, minus, quae debitis libero exercitationem hic facere. Sed repellendus placeat sit consequuntur exercitationem cum totam nobis quasi nisi explicabo, ea et ratione id perferendis repudiandae temporibus qui iusto fugit! In magni aut explicabo accusantium, dolor dolore blanditiis voluptas ea? Corporis quidem ipsa magni, sapiente nihil est dolorum accusamus quod, nobis in quos quae. Dolore asperiores aliquid nostrum praesentium, temporibus, veritatis facere quidem omnis adipisci hic voluptas est quibusdam quis maxime fuga rem ad natus molestias et placeat deserunt voluptatem quod cumque inventore! Assumenda quia dolorem, facere non fugit veniam? Fuga debitis sint exercitationem odio similique aliquam dolor dicta molestiae et. Voluptatibus, labore sit ex itaque qui ut suscipit quae tempore numquam excepturi esse quibusdam facere animi mollitia? Harum modi praesentium ipsam quo cupiditate. Iusto autem fugiat ducimus, assumenda quisquam officiis, sint nobis, molestias dolores doloremque esse repellat labore. Sit officia corporis eveniet similique. Dignissimos praesentium adipisci suscipit ipsum. Dolore libero aut excepturi nobis inventore laudantium veniam ducimus dolorum est. Voluptatem, in quisquam voluptas enim quibusdam praesentium ratione? Laudantium voluptatibus neque error quidem nihil, qui ratione labore provident quod ullam culpa reiciendis placeat, facilis obcaecati corrupti exercitationem unde, dolore molestias maxime pariatur molestiae commodi aperiam vel impedit! Ut mollitia sapiente laborum placeat soluta quos error consequuntur reiciendis asperiores doloribus, eligendi omnis quis id quod earum corporis temporibus fuga commodi dolorum? Quas totam reiciendis ratione assumenda beatae.</p>
            </Wrapper>

        </Container >
    )
}

export default Center