const game=()=>{
	let pScore=0;
	let cScore=0;
	const start=()=>{
		const introButton=document.querySelector('.intro button');
		// console.log(introButton);
		introButton.addEventListener('click',function(){
			document.querySelector('.intro').classList.add('fadeOut');
			setTimeout(()=>{
				document.querySelector('.intro').style.display="none";
			},500)
			document.querySelector('.match').classList.add('fadeIn');
		})
	}
	const play=()=>{
		const buttons= document.querySelectorAll('.match .buttons button');
		const playerHand=document.querySelector('.player-hand');
		const compHand=document.querySelector('.comp-hand');
		compDataArray=['rock','paper','scissor'];
		buttons.forEach((button)=>{
			// console.log(button);
			button.addEventListener('click',function(){
				const randData= Math.floor(Math.random() * 3);
				// console.log(compDataArray[randData]);
				const compChoice=compDataArray[randData];
				
				playerHand.style.animation="playeranime 1.5s ease-in-out";
				compHand.style.animation="companime 1.5s ease-in-out";
				playerHand.src=`assets/rock.png`;
				compHand.src=`assets/rock.png`;
				buttons.forEach((button)=>{
					button.style.pointerEvents='none';
				})
				setTimeout(()=>{
					compareData(this.textContent,compChoice);
					const modal=document.querySelector('.modal')
					if(pScore >= 5){
						modal.style.display='flex';
						modal.querySelector('h1').textContent='You won';
		document.querySelector('.container').style.display='none';

					}else if(cScore >= 5){
						modal.querySelector('h1').textContent='Computer won';
						modal.style.display='flex';
		document.querySelector('.container').style.display='none';

					}
					playerHand.src=`assets/${this.textContent}.png`;
					compHand.src=`assets/${compChoice}.png`;
				playerHand.style.animation="";
				compHand.style.animation="";
				buttons.forEach((button)=>{
					button.style.pointerEvents='all';
				})
				},1500)
			})
		})
	}
	const updateScores=()=>{
		const playerScore=document.querySelector('.player h2');
		const compScore=document.querySelector('.comp h2');
		playerScore.textContent=pScore;
		compScore.textContent=cScore;
	}
	const compareData=(playerOp,compOp)=>{
		const show=document.querySelector('.show');
		if(playerOp===compOp){
			show.textContent='Draw';
			return ;
		}
		if(playerOp==='rock'){
			if(compOp==='scissor'){
				show.textContent='You won';
				pScore++;
				updateScores();
				return;
			}else if(compOp==='paper'){
				show.textContent='Computer won';
				cScore++;
				updateScores();
				return;
			}
		}
		if(playerOp==='scissor'){
			if(compOp==='rock'){
				show.textContent='Computer won';
				cScore++;
				updateScores();
				return;
			}else if(compOp==='paper'){
				show.textContent='You won';
				pScore++;
				updateScores();
				return;
			}
		}
		if(playerOp==='paper'){
			if(compOp==='scissor'){
				show.textContent='Computer won';
				cScore++;
				updateScores();
				return;
			}else if(compOp==='rock'){
				show.textContent='You won';
				pScore++;
				updateScores();
				return;
			}
		}
	}
	start();
	play();

	document.querySelector('.modal button').addEventListener('click',function(){
		document.querySelector('.modal').style.display='none';
		pScore=0;
		cScore=0;
		updateScores();
		document.querySelector('.container').style.display='block';

	})
}
game();

