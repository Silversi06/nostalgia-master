// page1 html js
function goToPage2(selectedSeason, selectedAnswer) {
    const queryParams = {
      season: selectedSeason,
      answer: selectedAnswer,
    };
   
    const queryString = Object.entries(queryParams)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
  
    window.location.href = "page2.html?" + queryString;
  }
  
  // page2 html js
  function goToPage3(selectedAnswer) {
    const queryParams = new URLSearchParams(window.location.search);
    const selectedSeason = queryParams.get("season");
  
    const updatedParams = new URLSearchParams();
    updatedParams.set("season", selectedSeason);
    updatedParams.set("answer", selectedAnswer);
  
    const queryString = updatedParams.toString();
  
    window.location.href = "page3.html?" + queryString;
  }
  
  // page3.html
  function showResult(selectedAnimal) {
    const queryParams = new URLSearchParams(window.location.search);
    const selectedSeason = queryParams.get("season");
    const selectedAnswer = queryParams.get("answer");
  
    const updatedParams = new URLSearchParams();
    updatedParams.set("season", selectedSeason);
    updatedParams.set("answer", selectedAnswer);
    updatedParams.set("animal", selectedAnimal);
  
    const queryString = updatedParams.toString();
    let result = "";
  
    if ((
      selectedSeason === "spring" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "rabbit"
  
    )||(selectedSeason === "spring" &&
        selectedAnswer === "btn1" &&
        selectedAnimal === "biggle")
  
    ||(selectedSeason === "spring" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "spring" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "wolf")
  
        ||(selectedSeason === "spring" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "rabbit")
  
        ||(selectedSeason === "spring" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "spring" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "biggle") 
  
        ||(selectedSeason === "spring" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "wolf")){
      result = "page4-1.html";
    } 
    
    
    else if ((
      selectedSeason === "spring" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "panda"
    )
    ||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "wolf"
    )||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn2" &&
      selectedAnimal === "rabbit"
    )
    ||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn2" &&
      selectedAnimal === "biggle"
    )||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn3" &&
      selectedAnimal === "biggle"
    )
    ||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn3" &&
      selectedAnimal === "wolf"
    )||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn4" &&
      selectedAnimal === "rabbit"
    )
    ||(
      selectedSeason === "spring" &&
      selectedAnswer === "btn4" &&
      selectedAnimal === "panda"
    )) {
      result = "page4-2.html";
    } 
    
    
    else if ((
      selectedSeason === "summer" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "rabbit"
  
    )||(selectedSeason === "summer" &&
        selectedAnswer === "btn1" &&
        selectedAnimal === "biggle")
  
    ||(selectedSeason === "summer" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "summer" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "wolf")
  
        ||(selectedSeason === "summer" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "rabbit")
  
        ||(selectedSeason === "summer" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "summer" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "biggle") 
  
        ||(selectedSeason === "summer" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "wolf")) {
      result = "page4-3.html";
    }
    
    
    
    else if ((
      selectedSeason === "summer" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "panda"
    )
    ||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "wolf"
    )||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn2" &&
      selectedAnimal === "rabbit"
    )
    ||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn2" &&
      selectedAnimal === "biggle"
    )||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn3" &&
      selectedAnimal === "biggle"
    )
    ||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn3" &&
      selectedAnimal === "wolf"
    )||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn4" &&
      selectedAnimal === "rabbit"
    )
    ||(
      selectedSeason === "summer" &&
      selectedAnswer === "btn4" &&
      selectedAnimal === "panda"
    )) {
      result = "page4-4.html";
    } 
  
  
    else if((
      selectedSeason === "fall" &&
      selectedAnswer === "btn1" &&
      selectedAnimal === "rabbit"
  
    )||(selectedSeason === "fall" &&
        selectedAnswer === "btn1" &&
        selectedAnimal === "biggle")
  
    ||(selectedSeason === "fall" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "fall" &&
        selectedAnswer === "btn2" &&
        selectedAnimal === "wolf")
  
        ||(selectedSeason === "fall" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "rabbit")
  
        ||(selectedSeason === "fall" &&
        selectedAnswer === "btn3" &&
        selectedAnimal === "panda")
  
        ||(selectedSeason === "fall" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "biggle") 
  
        ||(selectedSeason === "fall" &&
        selectedAnswer === "btn4" &&
        selectedAnimal === "wolf")){
          result="page4-5.html";
        }
  
  
        else if((
          selectedSeason === "fall" &&
          selectedAnswer === "btn1" &&
          selectedAnimal === "panda"
        )
        ||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn1" &&
          selectedAnimal === "wolf"
        )||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn2" &&
          selectedAnimal === "rabbit"
        )
        ||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn2" &&
          selectedAnimal === "biggle"
        )||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn3" &&
          selectedAnimal === "biggle"
        )
        ||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn3" &&
          selectedAnimal === "wolf"
        )||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn4" &&
          selectedAnimal === "rabbit"
        )
        ||(
          selectedSeason === "fall" &&
          selectedAnswer === "btn4" &&
          selectedAnimal === "panda"
        )) {
          result = "page4-6.html";
        } 
    
        else if((
          selectedSeason === "winter" &&
          selectedAnswer === "btn1" &&
          selectedAnimal === "rabbit"
      
        )||(selectedSeason === "winter" &&
            selectedAnswer === "btn1" &&
            selectedAnimal === "biggle")
      
        ||(selectedSeason === "winter" &&
            selectedAnswer === "btn2" &&
            selectedAnimal === "panda")
      
            ||(selectedSeason === "winter" &&
            selectedAnswer === "btn2" &&
            selectedAnimal === "wolf")
      
            ||(selectedSeason === "winter" &&
            selectedAnswer === "btn3" &&
            selectedAnimal === "rabbit")
      
            ||(selectedSeason === "winter" &&
            selectedAnswer === "btn3" &&
            selectedAnimal === "panda")
      
            ||(selectedSeason === "winter" &&
            selectedAnswer === "btn4" &&
            selectedAnimal === "biggle") 
      
            ||(selectedSeason === "winter" &&
            selectedAnswer === "btn4" &&
            selectedAnimal === "wolf")){
              result="page4-7.html";
            }
  
            else if((
              selectedSeason === "winter" &&
              selectedAnswer === "btn1" &&
              selectedAnimal === "panda"
            )
            ||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn1" &&
              selectedAnimal === "wolf"
            )||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn2" &&
              selectedAnimal === "rabbit"
            )
            ||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn2" &&
              selectedAnimal === "biggle"
            )||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn3" &&
              selectedAnimal === "biggle"
            )
            ||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn3" &&
              selectedAnimal === "wolf"
            )||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn4" &&
              selectedAnimal === "rabbit"
            )
            ||(
              selectedSeason === "winter" &&
              selectedAnswer === "btn4" &&
              selectedAnimal === "panda"
            )) {
              result = "page4-8.html";
            } 
    
    else if (selectedAnimal === "") {
      alert("선택해주세요");
    }
  
    if (result !== "") {
      window.location.href = result + "?" + queryString;
    }
  }
  