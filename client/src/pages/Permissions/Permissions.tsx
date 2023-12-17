import { useAppSelector, useAppDispatch } from '../../store/hook';
import { changeClassPermissions } from '../../store/slices/permissionsSlice';

import './Permissions.sass';

import licenziaGPN from '../../public/img/permissions/licenziaGPN.jpg';
import licenziaRad from '../../public/img/permissions/licenziaRad.jpg';
import licenzia17025 from '../../public/img/permissions/licenzia17025.jpg';
import licenziaVSRB from '../../public/img/permissions/licenziaVSRB.jpg';
import licenzia9001 from '../../public/img/permissions/licenzia9001.jpg';
import licenziaGazProm_1 from '../../public/img/permissions/licenziaGazProm-1.jpg';
import licenziaGazProm_2 from '../../public/img/permissions/licenziaGazProm-2.jpg';

import GPN_icon from '../../public/img/permissions/GPN-icon.png';
import M4S_icon from '../../public/img/permissions/M4S-icon.png';
import BGCA_icon from '../../public/img/permissions/BGCA-icon.png';
import MO_icon from '../../public/img/permissions/MO-icon.jpg';
import STB_icon from '../../public/img/permissions/STB-icon.gif';
import GazProm_icon from '../../public/img/permissions/GazProm-icon.png';


const permissionsImg = [
    [licenziaGPN],
    [licenziaRad],
    [licenzia17025],
    [licenziaVSRB],
    [licenzia9001],
    [licenziaGazProm_1, licenziaGazProm_2]
];

const permissionsIcon = [
    GPN_icon,
    M4S_icon,
    BGCA_icon,
    MO_icon,
    STB_icon,
    GazProm_icon
];

const Permissions = () => {
    const dataPermissions = useAppSelector((state) => state.lang.text.permissions);
    const classPermissions = useAppSelector((state) => state.classPermissions.classPermissions)
    console.log(changeClassPermissions);
    
    const dispatch = useAppDispatch();

    return (
        <section className='app-permissions container'>
            <ul className="app-permissions-wrapp">
                {
                    dataPermissions.map((element, index) => {
                        return(
                            <li
                                className="app-permissions-item"
                                key={index}
                                onClick= {() => dispatch(changeClassPermissions())}
                                >
                                <div className="app-permissions-item-box-title">
                                    <img src={permissionsIcon[index]} alt='icon-licen' className="app-permissions-item__icon" />
                                    <h3 className="app-permissions-item__title">{element[0]}</h3>
                                </div>
                                <div className={classPermissions}>
                                    <h3 className="app-permissions-item__title">{element[1]}</h3>
                                    <div className="app-permissions-item-box-subtitle-box-img">
                                        {
                                            permissionsImg[index].map((e, idx) => {
                                                return(
                                                    <img src={e} alt='icon-licen' className="app-permissions-item__icon" key={`${idx}+_1`}/>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
};

export default Permissions;