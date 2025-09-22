function getCurrentTime(){
    const now = new Date();
    return now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit", second: "2-digit"})
}

function getElement(id){
 const element = document.getElementById(id);
 return element;

}

const serviceBtns = document.getElementsByClassName("btn-service");

for(let serviceBtn of serviceBtns){
  serviceBtn.addEventListener("click", function(){
    const serviceName = serviceBtn.parentNode.parentNode.children[1].innerText;
    const serviceNumber = serviceBtn.parentNode.parentNode.children[3].innerText
    const callFee = 20;
    const currentCoin = getElement("coin").innerText;
    if(currentCoin < 20){
      alert("কল করার জন্য কমপক্ষে ২০ টা কয়েন প্রয়োজন!")
      return;
    }
    alert(serviceName + " " + serviceNumber)
    const updatedCoin = currentCoin-callFee;
    getElement("coin").innerText=updatedCoin;
    const historyContainer = getElement("call-history");
    const newHistory = document.createElement("div");
    newHistory.innerHTML =`
       <div class="flex justify-between mt-5 p-3">
      <div>
      <h1 class="text-xl">${serviceName}</h1>
      <p>${serviceNumber}</p>
      </div>
        <p>${getCurrentTime()}</p>
    </div>
    `
    historyContainer.appendChild(newHistory);
  })
}


document.getElementById("btn-clear").addEventListener("click", function(){
  const callHistoryContainer = getElement("call-history")
    callHistoryContainer.innerHTML = ""

})


// copy button activity

const copyBtns = document.getElementsByClassName("btn-copy");

for(let copyBtn of copyBtns){
  copyBtn.addEventListener("click", function(){
    const hotlineNumber = copyBtn.parentNode.parentNode.children[3].innerText;

       navigator.clipboard?.writeText(hotlineNumber) || (t => {
      const a = document.createElement("textarea");
      a.value = t;
      document.body.appendChild(a);
      a.select();
      document.execCommand("copy");
      document.body.removeChild(a);
    })(hotlineNumber);
    alert("নম্বর কপি হয়েছে" + " " + hotlineNumber)

    const copyCount = getElement("copy-count").innerText;
    const updatedCopyCount = Number(copyCount) + 1;
    document.getElementById("copy-count").innerText = updatedCopyCount;
  })
}





const heartIcons = document.getElementsByClassName("fa-heart");

for(let heartIcon of heartIcons){
  heartIcon.addEventListener("click", function(){
    const heartCount = getElement("heart-count").innerText;
    const updatedHeartCount =Number( heartCount) + 1;
    getElement("heart-count").innerText = updatedHeartCount;
  })
}

