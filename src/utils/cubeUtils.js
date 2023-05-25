exports.selectDifficultyLevels=(selectedDifficultyLevel)=>{
    const difficultyLevels = [
        { value: 1, textContent: 'Very Easy', selected: false },
        { value: 2, textContent: 'Easy', selected: false },
        { value: 3, textContent: 'Medium (Standard 3x3)', selected: false },
        { value: 4, textContent: 'Intermediate', selected: false },
        { value: 5, textContent: 'Expert', selected: false },
        { value: 6, textContent: 'Hardcore', selected: false },
    ]
    const result = difficultyLevels.map(x=>x.value === selectedDifficultyLevel? {...x,selected:true}: x);
    return result;
}