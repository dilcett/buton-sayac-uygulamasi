import React from "react";

const SetText = ({button, var1}) => {
  return(
    <>
    <div>
    {button.blueCount > 0 ? (
        <>
        <p>Mavi butona tıklandı!</p>
        <p>Mavi butona {button.blueCount} kez tıklandı!</p>
        </>
    ) :
    ( ""
    )}
    </div>

    <div>
    {button.yellowCount > 0  ? (
        <>
        <p>Sarı butona tıklandı</p>
        <p>Sarı butona {button.yellowCount} kez tıklandı!</p>
        </>
    ) :
    ( ""
    )} 
    </div>
    <div>
    {button.blueCount + button.yellowCount > 0 ? (
        <>
        <p>Butonlara toplam {button.blueCount + button.yellowCount} kez tıklandı!</p>
        </>
    ) :
    ( ""
    )}
    </div>
    <div>
    {button.blueCount + button.yellowCount == 0 ? (
        <>
        <p>Butonlara henüz hiç tıklanmadı!</p>
        </>
    ) :
    ( ""
    )}
    </div>
    </>
  );
};

export default SetText;