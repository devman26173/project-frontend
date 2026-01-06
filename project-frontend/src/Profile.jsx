export default function Profile(){
    return (
        <div className="ProfilePage">

        {/* ページの機能 */}
        <h1>Profile</h1>

        {/* プロフィールセクション */}
        <section className="SectionProfile">
            <h2>Basic Information</h2>

            <div className="ProfileBoard">
                <div className="ProfileBoardLeft">

                    {/* ID値をDBから受けて表示 */}
                    <div className="BoxID">ID </div>

                    {/* Guestから受け取ったTXTを表示*/}
                    <div className="BoxIntroduce">Introduce</div>
                </div>

                {/* Guestけら受け取ったIMGファイルを表示 */}
                <div className="profileBoardRight"> Photo </div>

            </div>
        </section>
            
         {/* アクティビティセクション */}   
        <section className="SectionActivity">
            <h2>Activity</h2>

            {/* 最近の投稿*/}
            <div className="RecentArticle">
                <h3>Recent Writed</h3>

                {/* 投稿のカテゴリーをDBから受け取って表示 */}
                <div className="Category">Category</div>

                {/* 投稿のタイトルをDBから受け取って表示 */}
                <div className="Article">Arcticle</div>

                {/* 投稿時間をDBから受け取って表示 */}
                <div className="TimeArticle">TimeOfArcitcle </div>

            </div>

             {/* 最近のコメント*/}
            <div className="RecentCommented">
                <h3>Recent Commentd</h3>

                {/* 投稿のカテゴリーをDBから受け取って表示 */}
                <div className="Category">Category</div>

                {/* コメント内容をDBから受け取って表示 */}
                <div className="BodyOfComment">Arcticle</div>

                {/* コメント時間をDBから受け取って表示 */}
                <div className="TimeComment">TimeOfArcitcle </div>

            </div>

        </section>

        </div>
    )
}

