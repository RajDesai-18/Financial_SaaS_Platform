import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Raj', lastName: 'Desai', email: 'rvdesai1807@gmail.com' };
    return (
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Manage your money with ease."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.55}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>

            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 1250.48 }, { currentBalance: 500 }]}
            />
        </section>
    )
}

export default Home