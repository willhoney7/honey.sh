import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function AboutWebsite() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <h1 className={utilStyles.headingLg}>How I Got Started with Programming</h1>
                <p>
                    I grew up in Manhattan, Kansas. In middle school, I really wanted an iPhone, but
                    back then they were locked to AT&T which our small town didn't have. I ended up
                    getting a Samsung Instinct (whose ads famously claimed it was an iPhone killer).
                    It wasn't great and I even tried learning how to program apps on it but it was
                    beyond me. It was in Java and there weren't enough resources out there.
                    Eventually, Palm announced the Palm Pre I was hooked. I spent tons of time
                    watching videos, reading articles, and discussing the phone in online forums.
                </p>

                <p>
                    Eventually the phone was released (on June 6th, 2009) and I got one. I remember
                    on release day I spent much of my day on forums helping other new users answer
                    questions and figure out how to use their new phones. I gained a little bit of
                    notority in a VERY niche corner of the internet and was asked to be a "Technical
                    Reviewer" of{' '}
                    <a href="https://www.amazon.com/Palm-Pre-Missing-Ed-Baig/dp/0596803702">
                        Palm Pre: The Missing Manual
                    </a>
                    .
                </p>
                <p>
                    Fast forward a few months, I decided to try my hand at programming again. With
                    webOS, I was greeted by a warm IRC community and good documentation. Through the
                    help of many other developers, I figured it out and released a few apps. My
                    first was a puzzle game called{' '}
                    <a href="https://www.webosnation.com/countdown-puzzles">Countdown Puzzles</a>. I
                    wrote the majority of the code during a family road trip. I still remember the
                    feeling of building something "real" (not a tutorial) for the first time and
                    thinking, "I can do this."
                </p>

                <div style={{ display: 'flex', flexDirection: 'row', columnGap: 10 }}>
                    <img
                        src="/images/countdownpuzzles_home.png"
                        alt="Home page of Countdown Puzzles, my first webOS app"
                    />
                    <img
                        src="/images/countdownpuzzles_game.png"
                        alt="Game page of Countdown Puzzles, my first webOS app"
                    />
                </div>

                <p>
                    Another app I made was a music player called{' '}
                    <a href="https://www.webosnation.com/koto-player-229">Koto Player</a>. A news
                    site even wrote up an{' '}
                    <a href="https://www.webosnation.com/app-preview-koto-player">"App Preview"</a>{' '}
                    for it. I was really proud of that one.
                </p>

                <div style={{ display: 'flex', flexDirection: 'row', columnGap: 10 }}>
                    <img
                        src="/images/kotoplayer_nowplaying.png"
                        alt="Now playing page of Koto Player, a webOS app"
                    />
                    <img
                        src="/images/kotoplayer_artistview.png"
                        alt="Artist view page of Koto Player, a webOS app"
                    />
                </div>

                <p>
                    Along the way, I also spent a lot of time on the open source twitter client,{' '}
                    <a href="https://github.com/spazproject">Spaz</a>. In addition, I worked on a
                    messaging app for a while, called Mojo Messenger but it never was released. As
                    part of my work, I actually talked on the phone with Jan Koum of Whatsapp about
                    an "acquisition" where I'd build a Whatsapp client for webOS. It didn't go very
                    far when he found out I was 16ish. One day I'll write more about the experience.
                </p>

                <p>
                    In 2010, HP bought Palm and one of their new products was the HP Touchpad, a
                    tablet to compete with the iPad. I built a Google Reader client for it called
                    NomNomNom. Eventually, HP gave up on Palm and webOS and cut the Touchpad price
                    way down to get rid of inventory. Over night, there were thousands of more
                    devices out there but still the same amount of applications for sale. I still
                    remember the feeling of opening of the app catalog developer portal and seeing
                    how many sales I'd had. It was a wild time.
                </p>
                <img
                    src="/images/nomnomnom.png"
                    alt="Screenshot of NomNomNom, a Google Reader client for the HP Touchapd"
                />

                <p>
                    In 2012, I started in the Computer Science program at BYU. I honestly didn't
                    enjoy it very much, but I knew that software development was what I wanted to do
                    for my career. I worked for a random, poorly run startup for a few months until
                    the two cofounders had a falling out and abandoned the project. From there, I
                    worked on a special project for the BYU IT department measuring server
                    performance. It was an interesting experience, the software I worked with
                    supported a weird Java+JavaScript hybrid language.
                </p>
                <p>
                    From 2013 to 2015, I went down to Brazil as a Missionary for the Church of Jesus
                    Christ of Latter-day Saints. (I didn't do any programming).
                </p>
                <p>
                    Upon my return in 2015, I got an internship at Operational Results (ORI) as a
                    junior frontend developer. That went well and I continued working with them
                    while I finished my degree––working full-time in the summer and part-time during
                    school. Early on, the lead frontend developer quit and I grew into that role.
                </p>
                <p>
                    I graduated in 2018 with my Computer Science Degree and moved to Xactware as a
                    Senior Frontend Developer. I enjoyed it but missed the small company feel of
                    ORI. After a year, one of my coworkers from ORI reached out with an opportunity
                    to come back to ORI and lead the product team. After some consideration I
                    accepted and that's where I'm at today!
                </p>
            </section>
        </Layout>
    );
}
