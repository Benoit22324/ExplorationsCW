let root = document.getElementById('root');

let lists = [
    {date: '01/04/2024', logs: [
        {title: 'Exploration n°1', url: 'ExplorationsFiles/explo1.webm', type: 'video/webm', pov: 'Hakon, Gwen'},
        {title: 'Exploration n°2', url: 'ExplorationsFiles/explo2.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°3', url: 'ExplorationsFiles/explo3.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°4', url: 'ExplorationsFiles/explo4.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°5', url: 'ExplorationsFiles/explo5.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°6', url: 'ExplorationsFiles/explo6.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°7', url: 'ExplorationsFiles/explo7.webm', type: 'video/webm', pov: 'Gwen'},
        {title: 'Exploration n°8', url: 'ExplorationsFiles/explo8.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°9', url: 'ExplorationsFiles/explo9.webm', type: 'video/webm', pov: 'Hakon, Gwen, Benoit'},
        {title: 'Exploration n°10', url: 'ExplorationsFiles/explo10.webm', type: 'video/webm', pov: 'Hakon, Gwen'},
    ]},
    {date: '02/04/2024', logs: [
        {title: 'Exploration n°11', url: 'ExplorationsFiles/explo11.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°12', url: 'ExplorationsFiles/explo12.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°13', url: 'ExplorationsFiles/explo13.webm', type: 'video/webm', pov: 'Darsaan, Gwen'},
        {title: 'Exploration n°14', url: 'ExplorationsFiles/explo14.webm', type: 'video/webm', pov: 'Gwen, Benoit'},
        {title: 'Exploration n°15', url: 'ExplorationsFiles/explo15.webm', type: 'video/webm', pov: 'Gwen'},
        {title: 'Exploration n°16', url: 'ExplorationsFiles/explo16.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°17', url: 'ExplorationsFiles/explo17.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°18', url: 'ExplorationsFiles/explo18.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°19', url: 'ExplorationsFiles/explo19.webm', type: 'video/webm', pov: 'Gwen, AX'},
        {title: 'Exploration n°20', url: 'ExplorationsFiles/explo20.webm', type: 'video/webm', pov: 'Eblox'},
    ]},
    {date: '03/04/2024', logs: [
        {title: 'Exploration n°21', url: 'ExplorationsFiles/explo21.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°22', url: 'ExplorationsFiles/explo22.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°23', url: 'ExplorationsFiles/explo23.webm', type: 'video/webm', pov: 'Gwen, Eblox'},
        {title: 'Exploration n°24', url: 'ExplorationsFiles/explo24.webm', type: 'video/webm', pov: 'AX, Gwen'},
        {title: 'Exploration n°25', url: 'ExplorationsFiles/explo25.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°26', url: 'ExplorationsFiles/explo26.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
        {title: 'Exploration n°27', url: 'ExplorationsFiles/explo27.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°28', url: 'ExplorationsFiles/explo28.webm', type: 'video/webm', pov: 'Eblox (Gwen)'},
    ]},
    {date: '06/04/2024', logs: [
        {title: 'Exploration n°29', url: 'ExplorationsFiles/explo29.webm', type: 'video/webm', pov: 'Hakon, Eblox'},
        {title: 'Exploration n°30', url: 'ExplorationsFiles/explo30.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°31', url: 'ExplorationsFiles/explo31.webm', type: 'video/webm', pov: 'Gwen'},
        {title: 'Exploration n°32', url: 'ExplorationsFiles/explo32.webm', type: 'video/webm', pov: 'Eblox, AX'},
    ]},
    {date: '12/04/2024', logs: [
        {title: 'Exploration n°33', url: 'ExplorationsFiles/explo33.webm', type: 'video/webm', pov: 'AX, Maxtro'},
        {title: 'Exploration n°34', url: 'ExplorationsFiles/explo34.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°35', url: 'ExplorationsFiles/explo35.webm', type: 'video/webm', pov: 'Benoit, Maxtro'},
        {title: 'Exploration n°36', url: 'ExplorationsFiles/explo36.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
    ]},
    {date: '14/04/2024', logs: [
        {title: 'Exploration n°37', url: 'ExplorationsFiles/explo37.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°38', url: 'ExplorationsFiles/explo38.webm', type: 'video/webm', pov: 'Darsaan'},
        {title: 'Exploration n°39', url: 'ExplorationsFiles/explo39.webm', type: 'video/webm', pov: 'Benoit, Darsaan'},
        {title: 'Exploration n°40', url: 'ExplorationsFiles/explo40.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
        {title: 'Exploration n°41', url: 'ExplorationsFiles/explo41.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°42', url: 'ExplorationsFiles/explo42.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
        {title: 'Exploration n°43', url: 'ExplorationsFiles/explo43.webm', type: 'video/webm', pov: 'Benoit'},
    ]},
    {date: '15/04/2024', logs: [
        {title: 'Exploration n°44', url: 'ExplorationsFiles/explo44.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°45', url: 'ExplorationsFiles/explo45.webm', type: 'video/webm', pov: 'Darsaan, Benoit'},
        {title: 'Exploration n°46', url: 'ExplorationsFiles/explo46.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°47', url: 'ExplorationsFiles/explo47.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°48', url: 'ExplorationsFiles/explo48.webm', type: 'video/webm', pov: 'Darsaan, Benoit'},
        {title: 'Exploration n°49', url: 'ExplorationsFiles/explo49.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°50', url: 'ExplorationsFiles/explo50.webm', type: 'video/webm', pov: 'Darsaan (Benoit)'},
        {title: 'Exploration n°51', url: 'ExplorationsFiles/explo51.webm', type: 'video/webm', pov: 'Benoit, Darsaan'},
        {title: 'Exploration n°52', url: 'ExplorationsFiles/explo52.webm', type: 'video/webm', pov: 'Darsaan'},
        {title: 'Exploration n°53', url: 'ExplorationsFiles/explo53.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°54', url: 'ExplorationsFiles/explo54.webm', type: 'video/webm', pov: 'Benoit'},
    ]},
    {date: '16/04/2024', logs: [
        {title: 'Exploration n°55', url: 'ExplorationsFiles/explo55.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°56', url: 'ExplorationsFiles/explo56.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
        {title: 'Exploration n°57', url: 'ExplorationsFiles/explo57.webm', type: 'video/webm', pov: 'Benoit, Eblox (Darsaan)'},
        {title: 'Exploration n°58', url: 'ExplorationsFiles/explo58.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
    ]},
    {date: '17/04/2024', logs: [
        {title: 'Exploration n°59', url: 'ExplorationsFiles/explo59.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°60', url: 'ExplorationsFiles/explo60.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°61', url: 'ExplorationsFiles/explo61.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°62', url: 'ExplorationsFiles/explo62.webm', type: 'video/webm', pov: 'Darsaan, Benoit'},
        {title: 'Exploration n°63', url: 'ExplorationsFiles/explo63.webm', type: 'video/webm', pov: 'AX'},
    ]},
    {date: '20/04/2024', logs: [
        {title: 'Exploration n°64', url: 'ExplorationsFiles/explo64.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°65', url: 'ExplorationsFiles/explo65.webm', type: 'video/webm', pov: 'Eblox'},
    ]},
    {date: '21/04/2024', logs: [
        {title: 'Exploration n°66', url: 'ExplorationsFiles/explo66.webm', type: 'video/webm', pov: 'Eblox, Benoit'},
        {title: 'Exploration n°67', url: 'ExplorationsFiles/explo67.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°68', url: 'ExplorationsFiles/explo68.webm', type: 'video/webm', pov: 'AX, Eblox'},
        {title: 'Exploration n°69', url: 'ExplorationsFiles/explo69.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°70', url: 'ExplorationsFiles/explo70.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°71', url: 'ExplorationsFiles/explo71.webm', type: 'video/webm', pov: 'Benoit, Hakon'},
        {title: 'Exploration n°72', url: 'ExplorationsFiles/explo72.webm', type: 'video/webm', pov: 'Benoit'},
    ]},
    {date: '26/04/2024', logs: [
        {title: 'Exploration n°73', url: 'ExplorationsFiles/explo73.webm', type: 'video/webm', pov: 'Eblox, Benoit'},
        {title: 'Exploration n°74', url: 'ExplorationsFiles/explo74.webm', type: 'video/webm', pov: 'Hakon'},
    ]},
    {date: '02/05/2024', logs: [
        {title: 'Exploration n°75', url: 'ExplorationsFiles/explo75.webm', type: 'video/webm', pov: 'Benoit'},
    ]},
    {date: '03/05/2024', logs: [
        {title: 'Exploration n°76', url: 'ExplorationsFiles/explo76.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°77', url: 'ExplorationsFiles/explo77.webm', type: 'video/webm', pov: 'Eblox, Hakon, Darsaan'},
        {title: 'Exploration n°78', url: 'ExplorationsFiles/explo78.webm', type: 'video/webm', pov: 'Hakon'},
        {title: 'Exploration n°79', url: 'ExplorationsFiles/explo79.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°80', url: 'ExplorationsFiles/explo80.webm', type: 'video/webm', pov: 'Hakon, Eblox'},
        {title: 'Exploration n°81', url: 'ExplorationsFiles/explo81.webm', type: 'video/webm', pov: 'Eblox'},
    ]},
    {date: '04/05/2024', logs: [
        {title: 'Exploration n°82', url: 'ExplorationsFiles/explo82.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°83', url: 'ExplorationsFiles/explo83.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°84', url: 'ExplorationsFiles/explo84.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°85', url: 'ExplorationsFiles/explo85.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°86', url: 'ExplorationsFiles/explo86.webm', type: 'video/webm', pov: 'AX'},
        {title: 'Exploration n°87', url: 'ExplorationsFiles/explo87.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°88', url: 'ExplorationsFiles/explo88.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°89', url: 'ExplorationsFiles/explo89.webm', type: 'video/webm', pov: 'Darsaan'},
    ]},
    {date: '07/05/2024', logs: [
        {title: 'Exploration n°90', url: 'ExplorationsFiles/explo90.webm', type: 'video/webm', pov: 'Darsaan, Eblox'},
        {title: 'Exploration n°91', url: 'ExplorationsFiles/explo91.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°92', url: 'ExplorationsFiles/explo92.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°93', url: 'ExplorationsFiles/explo93.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°94', url: 'ExplorationsFiles/explo94.webm', type: 'video/webm', pov: 'Benoit, Eblox'},
    ]},
    {date: '18/05/2024', logs: [
        {title: 'Exploration n°95', url: 'ExplorationsFiles/explo95.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°96', url: 'ExplorationsFiles/explo96.webm', type: 'video/webm', pov: 'Eblox'},
    ]},
    {date: '29/05/2024', logs: [
        {title: 'Exploration n°97', url: 'ExplorationsFiles/explo97.webm', type: 'video/webm', pov: 'Benoit'},
        {title: 'Exploration n°98', url: 'ExplorationsFiles/explo98.webm', type: 'video/webm', pov: 'Darsaan, AX, Eblox'},
        {title: 'Exploration n°99', url: 'ExplorationsFiles/explo99.webm', type: 'video/webm', pov: 'Eblox'},
        {title: 'Exploration n°100', url: 'ExplorationsFiles/explo100.webm', type: 'video/webm', pov: 'Darsaan'},
        {title: 'Exploration n°101', url: 'ExplorationsFiles/explo101.webm', type: 'video/webm', pov: 'Eblox'},
    ]},
];

for (let list of lists) {
    let logs = '';
    for (let log of list.logs) {
        logs += `
        <div class="exploration">
            <h3>${log.title}</h3>
            <p>POV: ${log.pov}</p>
            <video src=${log.url} type=${log.type} controls width="100%"></video>
        </div>
        `
    }

    root.innerHTML += `
    <section class="exploration_section">
        <h2>Le ${list.date}</h2>
        <div class="exploration_files">${logs}</div>
    </section>
    `
}
