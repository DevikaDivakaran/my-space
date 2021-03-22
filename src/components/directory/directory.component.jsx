import React from 'react';
import FriendView from '../directory/directory.component';
class Directory extends React.Component {
    constructor() {
      super();
  
      this.state = {
        sections: [
          {
            title: 'Kim Namjoon',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_RM_profile-200x200.jpg',
            id: 1,
            linkUrl: 'name1'
          },
          {
            title: 'Kim Soekjin',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jin_profile-200x200.jpg',
            id: 2,
            linkUrl: 'name2'
          },
          {
            title: 'Min Yoongi',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_Suga_profile-200x200.jpg',
            id: 3,
            linkUrl: 'name3'
          },
          {
            title: 'jung Hoseok',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_J-Hope_profile-200x200.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'name4'
          },
          {
            title: 'Park Jimin',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jimin_profile-200x200.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'name5'
          },
          {
            title: 'Kim Taehyung',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_V_profile-200x200.jpg',
            size: 'large',
            id: 6,
            linkUrl: 'name6'
          },
          {
            title: 'Jeon Jungkook',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/bts_map_of_the_soul_7_concept_UHD_Jungkook_Profile-200x200.jpg',
            size: 'large',
            id: 7,
            linkUrl: 'name7'
          },
          {
            title: 'Lisa',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_lisa_profile_the_album-200x200.jpg',
            size: 'large',
            id: 8,
            linkUrl: 'name8'
          },
          {
            title: 'Rose',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Rose_profile_the_album-200x200.jpg',
            size: 'large',
            id: 9,
            linkUrl: 'name9'
          },
          {
            title: 'Jennie',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Jennie_profile_the_album-200x200.jpg',
            size: 'large',
            id: 10,
            linkUrl: 'name10'
          },
          {
            title: 'Jisoo',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2018/12/blackpink_Jisoo_profile_the_album-200x200.jpg',
            size: 'large',
            id: 11,
            linkUrl: 'name11'
          },
          {
            title: 'Tzuyu',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/twice_tzuyu_profile_eyes_wide_open-200x200.jpg',
            id: 12,
            linkUrl: 'name12'
          },
          {
            title: 'Chaeyoung',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Chaeyoung_profile_Eyes_wide_open-200x200.jpg',
            id: 13,
            linkUrl: 'name13'
          },
          {
            title: 'Dahyun',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_dahyun_profile_moremore-200x200.jpg',
            id: 14,
            linkUrl: 'name14'
          },
          {
            title: 'Mina',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Mina_Profile_MoreMore-200x200.jpg',
            id: 15,
            linkUrl: 'name15'
          },
          {
            title: 'Jihyo',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Jihyo_profile_Eyes_wide_open-200x200.jpg',
            id: 16,
            linkUrl: 'name16'
          },
          {
            title: 'Sana',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_sana_profile_eyes_wide_open-200x200.jpg',
            id: 17,
            linkUrl: 'name17'
          },
          {
            title: 'Momo',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Momo_profile_moreandmore-200x200.jpg',
            id: 18,
            linkUrl: 'name18'
          },
          {
            title: 'Jeongyeon',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/twice_moremore_concept_HD_Jeongyeon_profile-200x200.jpg',
            id: 19,
            linkUrl: 'name19'
          },
          {
            title: 'Nayeon',
            imageUrl: 'https://dbkpop.com/wp-content/uploads/2016/11/Twice_Nayeon_Profile_Eyes_wide_open-200x200.jpg',
            id: 20,
            linkUrl: 'name20'
          }
        ]
      };
    }
  
    render() {
      return (
        <div className='directory-friends'>
          {this.state.sections.map(({ id, ...otherSectionProps }) => (
            <FriendView key={id} {...otherSectionProps} />
          ))}
        </div>
      );
    }
  }
  
  export default Directory;