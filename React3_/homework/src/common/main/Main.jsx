import ChapterButton from '../../components/chapterButton/ChapterButton';
import { ChapterButtonsData } from '../../data/ChapterButtons';

import Aside from '../aside/Aside';
import Container from '../container/Container';



import './index.css';

function Main() {
    let chapterButtons = ChapterButtonsData.map(item=>(
        <ChapterButton color={item.iconTableColor} icon={item.icon} title={item.title} content={item.content}/>
    ));

    let content =
        <>
            <Aside/>
            <article>
                <section className='main__chapterButtons'>
                    {chapterButtons}
                    {/* <ChapterButton data={ChapterButtonsData}/> */}
                </section>
                <section>
                    
                </section>
            </article>
        </>;
    return (
        <>
            <main>
                <Container containerClassName='main__container'
                    containerContents={content}
                />
            </main>
        </>
    );
}

export default Main;