import React, {useState} from "react";

//コンポネント宣言
export default function ProfileEdit(){

    //useStateで情報を保持
    const [profile, setProfile] = useState({
        id: "user_001",
        introduce: "",
        region: "",
    })
    //入力されたら呼ばれる
    const handleChange = (e) => {
        const{ name, value } = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    //保存ボタン
    const handelSubmit = (e) => {
        e.preventDefault();

        if (!profile.introduce){
            alert("自己紹介を入力してください")
            return;
        }
        if (!profile.region){
            alert("地域を入力してください")
            return;
        }

        alert("プロフィールを更新しました");
        console.log(profile);
    };
    
    
    return(
        <div className="container py-4" style={{maxWidth: "400px"}}>
            
            <h1 className="text-canter fw-bold"
            style={{fontSize: "24px", marginBottom: "30px"}}
            >
                ProfileEdit     
            </h1>

            <form onSubmit={handelSubmit}>
            {/* ID */}
            <div className="mb-4">
                <label className="for-label small fw-bold">ID</label>
                <input 
                    type="text" 
                    className="form-control" 
                    value={profile.id}
                    disabled
                    style={{
                        backgroundColor: "#f0f0f0",
                        border: "none",
                        fontsize: "14px",
                    }}
                />            
            </div>
            {/* 自己紹介 */}        
            <div className="mb-4">
             <label className="form-label small fw-bold">Introduce</label>
             <textarea
              name="introduce"
              className="form-control"
              rows="4"
              value={profile.introduce}
              onChange={handleChange}
              placeholder="自己紹介を入力してください"
              style={{
                backgroundColor: "#e8e8e8",
                border: "none",
                fontsize: "14px",
              }}

             />   
            </div>        

            {/* 地域 */}
            <div className="mb-4">
              <label className="form-label small fw-bold">地域</label>
              <input
                type="text"
                name="region"
                className="form-control"
                value={profile.region}
                onChange={handleChange}
                placeholder="地域を入力してください"
                style={{
                    backgroundColor:"#e8e8e8",
                    border:"none",
                    fontSize:"14px",
                }}
              />
            </div>
            {/* Buttons */}
                <div className="d-grid gap-2">
                <button
                    type="submit"
                    className="bth"
                    style={{
                        backgroundColor:"#d0d0d0",
                        border:"none",
                        padding:"14px:",
                        fontSize:"16px",
                        color:"#666",
                        fontWeight:"500",
                    }}
                >
                    保存
                </button>

                <button
                    type="button"
                    className="btn btn-outline-secondary"
                >
                    キャンセル
                </button>
            </div>
        </form>
    </div>
    );




}