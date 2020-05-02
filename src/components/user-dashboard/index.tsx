import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBag, faIdCard, faHouseUser, faCreditCard, faInbox, faCoins, faSignOutAlt,
  faKey, faComment, faAngleDown, faAngleUp, faCircle, faUser
} from '@fortawesome/free-solid-svg-icons';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { MainLayout } from '../../components';
import styles from './index.module.scss';
import utilStyles from '../../styles/scss/utils.module.scss';

const cx = classNames.bind(styles);
const util_cx = classNames.bind(utilStyles);

const baseRoute = '/user';
const subPages = [
  { title: 'پیشخوان', href: '/main', icon: <FontAwesomeIcon icon={faHouseUser} /> },
  { title: 'تکمیل ثبت نام', href: '/authentication', icon: <FontAwesomeIcon icon={faIdCard} /> },
  { title: 'خرید ارز', href: '/buy-list', icon: <FontAwesomeIcon icon={faShoppingBag} /> },
  { title: 'فروش ارز', href: '/sell-list', icon: <FontAwesomeIcon icon={faCoins} /> },
  { title: 'کارت های بانکی', href: '/credit-cards', icon: <FontAwesomeIcon icon={faCreditCard} /> },
  { title: 'پیام ها', href: '/messages', icon: <FontAwesomeIcon icon={faInbox} /> },
  {
    title: 'تیکت ها', href: '/tickets', icon: <FontAwesomeIcon icon={faComment} />,
    subItems: [
      { title: 'ارسال تیکت جدید', href: '/tickets/create' },
      { title: 'مشاهده تیکت ها', href: '/tickets' }
    ]
  },
  {
    title: 'اطلاعات من', href: '/profile | /sub-members | /coupons', icon: <FontAwesomeIcon icon={faUser} />,
    subItems: [
      { title: 'حساب کاربری', href: '/profile' },
      // { title: 'تغییر رمز', href: '/tickets' },
      { title: 'افراد زیر مجموعه', href: '/sub-members' },
      { title: 'تخفیف های من', href: '/coupons' }
    ]
  }
];

export default ({ children }) => {

  const { pathname } = useRouter();
  const [open, setOpen] = useState({});
  const [clicked, setClicked] = useState('');

  const currentPage = subPages.find(i => i.href.indexOf(clicked) > -1);
  const currentSubItem = currentPage.subItems ? currentPage.subItems.find(i => pathname.includes(i.href)) : null;

  const toggleSubList = (href: string) => {
    setOpen({ ...open, [href]: open[href] ? open[href] === 'not clicked' ? 'clicked' : 'not clicked' : 'clicked' });
  };

  const buttonClicked = (href: string) => {
    setClicked(href);
  };

  useEffect(() => {
    subPages.forEach(page => {
      const hrefList = page.href.split('|');
      hrefList.forEach(href => {
        if (pathname.includes(href.trim())) {
          setClicked(page.href);
        }
      });
    });
  }, []);

  return (
    <MainLayout
      title={currentSubItem ? currentSubItem.title : currentPage.title}
      description='پنل کاربری پولورت'
    >
      <Grid container={true} className={cx('dashboard-container')}>
        <Grid item={true} xs={2}>
          <aside className={util_cx('pb10')}>
            <section>
              <Grid className={util_cx('flex-row-space-between', 'flex-nowrap', 'p15', 'pr20', 'pl20')}>
                <Button startIcon={<FontAwesomeIcon icon={faSignOutAlt} />} className={cx('signout-btn')}>
                  خروج
                </Button>
                <Button startIcon={<FontAwesomeIcon icon={faKey} />} className={cx('changePass-btn')}>
                  تغییر رمز
                </Button>
              </Grid>
            </section>
            <section>
              <List component='ul' aria-labelledby='dashboard-buttons'>
                {subPages.map(page => !page.subItems ?
                  <Link href={baseRoute + page.href}>
                    <ListItem
                      className={cx('listItem', {
                        'listItem-active': clicked ? page.href.indexOf(clicked) > -1 : pathname.includes(page.href)
                      })}
                      onClick={() => buttonClicked(page.href)}
                    >
                      <span className={cx('listItem-shadow-effect')}></span>
                      <ListItemIcon className={cx('listItem-icon')}>
                        {page.icon}
                      </ListItemIcon>
                      <ListItemText primary={page.title} className={cx('listItem-text')} />
                    </ListItem>
                  </Link>
                  :
                  <>
                    <ListItem
                      className={cx('listItem', 'no-hover', {
                        'listItem-active': open[page.href] || clicked ? page.href.indexOf(clicked) > -1 :
                          pathname.includes(page.href)
                      })}
                      onClick={() => toggleSubList(page.href)}
                    >
                      <span className={cx('listItem-shadow-effect')}></span>
                      <ListItemIcon className={cx('listItem-icon')}>
                        {page.icon}
                      </ListItemIcon>
                      <ListItemText primary={page.title} className={cx('listItem-text')} />
                      {
                        page.subItems ? (
                          (open[page.href] && open[page.href] === 'clicked') ||
                          (!open[page.href] && page.href.includes(pathname.split("/")[2]))
                        ) ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} /> : <></>
                      }
                    </ListItem>
                    <Collapse
                      in={open[page.href] ? open[page.href] === 'clicked' : page.href.includes(pathname.split("/")[2])}
                      unmountOnExit={true}
                    >
                      <List component='ul' className={cx('subList')}>
                        {page.subItems.map(item =>
                          <Link href={baseRoute + item.href}>
                            <ListItem className={cx('subListItem')}>
                              <ListItemIcon className={cx('subListItem-icon')}>
                                <FontAwesomeIcon icon={faCircle} />
                              </ListItemIcon>
                              <ListItemText primary={item.title} className={cx('subListItem-text')} />
                            </ListItem>
                          </Link>
                        )}
                      </List>
                    </Collapse>
                  </>
                )}
              </List>
            </section>
          </aside>
        </Grid>
        <Grid item={true} xs={10} className={cx('content-container')}>
          {currentPage &&
            <Grid container={true} className={util_cx('flex-nowrap')}>
              <Typography variant='h6' className={cx('page-title')}>
                {currentSubItem ? currentSubItem.title : currentPage.title}
              </Typography>
              <div className={cx('page-title-line')}></div>
            </Grid>
          }
          {children}
        </Grid>
      </Grid>
    </MainLayout>
  );

};
