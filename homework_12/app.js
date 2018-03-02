// Your code goes here
const root = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'thumbnails');
function rendList() {
    const heading = document.createElement('h1');
    const main = root.appendChild(container);
    main.appendChild(heading);
    heading.innerHTML = 'Most popular tanks';
    heading.setAttribute('class', 'title');
    const flexContainer = document.createElement('div');
    flexContainer.setAttribute('class', 'flex-container');
    tanks.forEach(key => {
        const flexItem = document.createElement('div');
        flexItem.setAttribute('class', 'flex-item');
        let tankImg = document.createElement('img');
        tankImg.setAttribute('class', 'tank-picture');
        let countryFlag = document.createElement('img');
        countryFlag.setAttribute('class', 'tank-flag');
        flexItem.appendChild(tankImg);
        flexItem.appendChild(countryFlag);
        countryFlag.src = `images/countries/${key.country}.png`;
        tankImg.src = key.preview;
        countryFlag.title = `${key.country}`;
        const tankModel = document.createElement('h4');
        tankModel.setAttribute('class', 'tank-model');
        tankModel.title = key.model;
        tankModel.innerHTML = key.model;
        flexItem.appendChild(tankModel);
        flexContainer.appendChild(flexItem);
        flexItem.addEventListener('click', () => {
            location.hash = key.model;
        });
    });
    main.appendChild(flexContainer);
    return main;
}
function renderDetails(tank) {
    const details = tank.details;
    return ` <div class="tank-details">
            <div class="left-column">
              <h1>
                <img class="detail-flag" src="images/countries/${tank.country}.png" title="${tank.country}"/>${tank.model} (level ${tank.level})
              </h1>
               <span class="preview">Preview</span>
               <img class="tank-details-flag" src="${tank.preview}">
               <span class="back-link">Back to list view</span>
               </div>
               
               <div class="right-column">
               <h1 class="preTable">Characteristic</h1>
               <table>
                <tr>
                    <th>
                        damage
                    </th>
                    <th>
                        ${details.damage}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        breoning
                    </th>
                    <th>
                        ${details.breoning}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        attack speed
                    </th>
                    <th>
                        ${details.attack_speed}
                    </th>
                </tr>
                
                 <tr>
                    <th>
                        time of targeting
                    </th>
                    <th>
                        ${details.time_of_targeting}
                    </th>
                </tr>

                  <tr>
                    <th>
                        ammunition
                    </th>
                    <th>
                        ${details.ammunition}
                    </th>
                </tr>
               </table>
              </div>
           </div>`
}
function tankDetail() {
    let model = location.hash.slice(1);
    tanks.forEach(elem => {
        if (elem.model === model) {
            root.innerHTML = renderDetails(elem);
        }
    });
    const backLink = document.getElementsByClassName('back-link');
    backLink[0].addEventListener('click', () => {
        location.hash = '';
        window.history.go();
    });
}
root.appendChild(rendList());
window.onhashchange = tankDetail;

const styleSheet = document.styleSheets[0];
const hoverColor = ['#82846F', '#717361', '#414241', '#ABB1B2', '#89816B', '#8E8877', '#999082', '#90887B'];
for(let i = 0; i < tanks.length; i++) {
        let rule = `.flex-item:nth-child(${i+1}):hover {
        background: ${hoverColor[i]};
        }`;
    styleSheet.insertRule(rule, i);
}