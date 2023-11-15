import React from 'react';
import Back from "../auth/Back";

const Policy = () => {
    return (
        <div className='wrapper'>
            <Back text='Назад'/>
            <div>
                Конфиденциа́льность (от лат. confidentia — доверие) — необходимость предотвращения разглашения, утечки какой-либо информации.
                В информационной безопасности и защите информации специалисты придерживаются следующего определения: конфиденциальность информации — свойство безопасности информации, при котором доступ к ней осуществляют только субъекты доступа, имеющие на него право.
                В юриспруденции конфиденциальность информации — обязательное для выполнения лицом, получившим доступ к определенной информации, требование не передавать такую информацию третьим лицам без согласия её обладателя.
                Конфиденциальная информация — информация, являющаяся конфиденциальной, то есть «доверительной, не подлежащей огласке, секретной»; это понятие равнозначно с понятиями тайны или секрета.
            </div>
        </div>
    );
};

export default Policy;