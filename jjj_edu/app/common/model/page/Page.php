<?php

namespace app\common\model\page;

use app\common\model\BaseModel;

/**
 * diy页面模型
 */
class Page extends BaseModel
{
    protected $pk = 'page_id';
    protected $name = 'page';

    /**
     * 页面标题栏默认数据
     * @return array
     */
    public function getDefaultPage()
    {
        static $defaultPage = [];
        if (!empty($defaultPage)) return $defaultPage;
        return [
            'type' => 'page',
            'name' => '页面设置',
            'params' => [
                'name' => '页面名称',
                'title' => '页面标题',
                'share_title' => '分享标题'
            ],
            'style' => [
                'titleTextColor' => 'black',
                'titleBackgroundColor' => '#ffffff',
                'toplogo' => 'http://wx-cdn.jiujiuyunhui.com/20210618184614807d88060.png'
            ],
            'category' => [
                'open' => 0,
                'color' => '#000000',
            ]
        ];
    }

    /**
     * 页面diy元素默认数据
     * @return array[]
     */
    public function getDefaultItems()
    {
        return [
            'banner' => [
                'name' => '图片轮播',
                'type' => 'banner',
                'group' => 'media',
                'style' => [
                    'btnColor' => '#ffffff',
                    'background' => '#F6F6F6',
                    'btnShape' => 'rectangle',//rectangle 长方形，round圆形, square正方形
                    'imgShape' => 'round', //square 正方形，round圆形
                    'height' => 306,
                ],
                'params' => [
                    'interval' => '2800'
                ],
                'data' => [
                    [
                        'imgUrl' => self::$base_url . 'image/diy/banner/01.png',
                        'linkUrl' => ''
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/banner/01.png',
                        'linkUrl' => ''
                    ]
                ]
            ],
            'imageSingle' => [
                'name' => '单图组',
                'type' => 'imageSingle',
                'group' => 'media',
                'style' => [
                    'paddingTop' => 0,
                    'paddingLeft' => 0,
                    'background' => '#ffffff'
                ],
                'data' => [
                    [
                        'imgUrl' => self::$base_url . 'image/diy/banner/01.png',
                        'imgName' => 'image-1.jpg',
                        'linkUrl' => ''
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/banner/01.png',
                        'imgName' => 'banner-2.jpg',
                        'linkUrl' => ''
                    ]
                ]
            ],
            'navBar' => [
                'name' => '导航组',
                'type' => 'navBar',
                'group' => 'media',
                'style' => ['background' => '#ffffff', 'rowsNum' => '4'],
                'data' => [
                    [
                        'imgUrl' => self::$base_url . 'image/diy/navbar/01.png',
                        'imgName' => 'icon-1.png',
                        'linkUrl' => '',
                        'text' => '按钮文字1',
                        'color' => '#666666'
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/navbar/02.png',
                        'imgName' => 'icon-2.jpg',
                        'linkUrl' => '',
                        'text' => '按钮文字2',
                        'color' => '#666666'
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/navbar/03.png',
                        'imgName' => 'icon-3.jpg',
                        'linkUrl' => '',
                        'text' => '按钮文字3',
                        'color' => '#666666'
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/navbar/04.png',
                        'imgName' => 'icon-4.jpg',
                        'linkUrl' => '',
                        'text' => '按钮文字4',
                        'color' => '#666666'
                    ]
                ]
            ],
            'blank' => [
                'name' => '辅助空白',
                'type' => 'blank',
                'group' => 'tools',
                'style' => [
                    'height' => 20,
                    'background' => '#ffffff'
                ]
            ],
            'guide' => [
                'name' => '辅助线',
                'type' => 'guide',
                'group' => 'tools',
                'style' => [
                    'background' => '#ffffff',
                    'lineStyle' => 'solid',
                    'lineHeight' => '1',
                    'lineColor' => "#000000",
                    'paddingTop' => 10
                ]
            ],
            'video' => [
                'name' => '视频组',
                'type' => 'video',
                'group' => 'media',
                'params' => [
                    'videoUrl' => 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400',
                    'poster' => self::$base_url . 'image/diy/video_poster.png',
                    'autoplay' => 0
                ],
                'style' => [
                    'paddingTop' => 0,
                    'height' => 190
                ]
            ],
            'article' => [
                'name' => '文章组',
                'type' => 'article',
                'group' => 'media',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => '0',
                        'showNum' => 6
                    ]
                ],
                'style' => [
                    'display' => '10'
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'article_title' => '此处显示文章标题',
                        'show_type' => 10,
                        'image' => self::$base_url . 'image/diy/article/01.png',
                        'views_num' => 309
                    ],
                    [
                        'article_title' => '此处显示文章标题',
                        'show_type' => 10,
                        'image' => self::$base_url . 'image/diy/article/01.png',
                        'views_num' => 309
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => []
            ],
            'special' => [
                'name' => '头条快报',
                'type' => 'special',
                'group' => 'media',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => 0,
                        'showNum' => 6
                    ]
                ],
                'style' => [
                    'display' => 1,
                    'image' => self::$base_url . 'image/diy/special.png'
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'article_title' => '此处显示头条快报标题'
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => []
            ],
            'notice' => [
                'name' => '公告组',
                'type' => 'notice',
                'group' => 'media',
                'params' => [
                    'text' => '这里是第一条自定义公告的标题',
                    'icon' => self::$base_url . 'image/diy/notice.png'
                ],
                'style' => [
                    'paddingTop' => 4,
                    'background' => '#ffffff',
                    'textColor' => '#000000'
                ]
            ],
            'richText' => [
                'name' => '富文本',
                'type' => 'richText',
                'group' => 'tools',
                'params' => [
                    'content' => '<p>这里是文本的内容</p>'
                ],
                'style' => [
                    'paddingTop' => 0,
                    'paddingLeft' => 0,
                    'background' => '#ffffff'
                ]
            ],
            'window' => [
                'name' => '图片橱窗',
                'type' => 'window',
                'group' => 'media',
                'style' => [
                    'paddingTop' => 0,
                    'paddingLeft' => 0,
                    'background' => '#ffffff',
                    'layout' => '2'
                ],
                'data' => [
                    [
                        'imgUrl' => self::$base_url . 'image/diy/window/01.jpg',
                        'linkUrl' => ''
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/window/02.jpg',
                        'linkUrl' => ''
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/window/03.jpg',
                        'linkUrl' => ''
                    ],
                    [
                        'imgUrl' => self::$base_url . 'image/diy/window/04.jpg',
                        'linkUrl' => ''
                    ]
                ],
                'dataNum' => 4
            ],
            'lecturer' => [
                'name' => '讲师组',
                'type' => 'lecturer',
                'group' => 'shop',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => 0,
                        'showNum' => 6
                    ]
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ],
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ],
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ],
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => [
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ],
                    [
                        'title' => '此处显示讲师名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                    ]
                ]
            ],
            'course' => [
                'name' => '课程组',
                'type' => 'course',
                'group' => 'shop',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => 0,
                        'productSort' => 'all', // all; sales; price
                        'showNum' => 6
                    ]
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => [
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ]
                ]
            ],
            'education' => [
                'name' => '教务组',
                'type' => 'education',
                'group' => 'shop',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => 0,
                        'productSort' => 'all', // all; sales; price
                        'showNum' => 6
                    ]
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => [
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ],
                    [
                        'title' => '此处显示课程名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ]
                ]
            ],
            'train' => [
                'name' => '练习组',
                'type' => 'train',
                'group' => 'shop',
                'params' => [
                    'source' => 'auto', // choice; auto
                    'auto' => [
                        'category' => 0,
                        'productSort' => 'all', // all; sales; price
                        'showNum' => 6
                    ]
                ],
                // '自动获取' => 默认数据
                'defaultData' => [
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ],
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                    ]
                ],
                // '手动选择' => 默认数据
                'data' => [
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ],
                    [
                        'title' => '此处显示练习名称',
                        'image' => self::$base_url . 'image/diy/product/01.png',
                        'product_price' => '99.00',
                        'product_sales' => '100',
                        'is_default' => true
                    ]
                ]
            ],
            'service' => [
                'name' => '在线客服',
                'type' => 'service',
                'group' => 'tools',
                'params' => [
                    'type' => 'chat',     // '客服类型' => chat在线聊天，phone拨打电话
                    'image' => self::$base_url . 'image/diy/service.png',
                    'phone_num' => ''
                ],
                'style' => [
                    'right' => '1',
                    'bottom' => '10',
                    'opacity' => '100'
                ]
            ],
            'title' => [
                'name' => '标题',
                'type' => 'title',
                'group' => 'media',
                'style' => [
                    'paddingTop' => 16,
                    'background' => '#F5F5F5',
                    'textColor' => '#333333'
                ],
                'params' => [
                    'title' => '标题名称',
                    'show_icon' => 'no',
                    'icon' => '',
                    'name' => '',
                    'linkUrl' => ''
                ]
            ]
        ];
    }

    /**
     * 格式化页面数据
     * @param $json
     * @return mixed
     */
    public function getPageDataAttr($json)
    {
        // 旧版数据转义
        $array = $this->_transferToNewData($json);
        // 合并默认数据
        return $this->_mergeDefaultData($array);
    }

    /**
     * 自动转换data为json格式
     * @param $value
     * @return false|string
     */
    public function setPageDataAttr($value)
    {
        return json_encode($value ?: ['items' => []]);
    }

    /**
     * diy页面详情
     */
    public static function detail($page_id)
    {
        return (new static())->find($page_id);
    }

    /**
     * diy页面详情
     */
    public static function getHomePage()
    {
        return (new static())->where('page_type', '10')->find();
    }

    /**
     * 旧版数据转义为新版格式
     */
    private function _transferToNewData($json)
    {
        $array = json_decode($json, true);
        $items = $array['items'];
        if (isset($items['page'])) {
            unset($items['page']);
        }
        foreach ($items as &$item) {
            isset($item['data']) && $item['data'] = array_values($item['data']);
        }
        return [
            'page' => isset($array['page']) ? $array['page'] : $array['items']['page'],
            'items' => array_values(array_filter($items))
        ];
    }

    /**
     * 合并默认数据
     */
    private function _mergeDefaultData($array)
    {
        $array['page'] = array_merge_multiple($this->getDefaultPage(), $array['page']);
        $defaultItems = $this->getDefaultItems();
        foreach ($array['items'] as &$item) {
            if (isset($defaultItems[$item['type']])) {
                array_key_exists('data', $item) && $defaultItems[$item['type']]['data'] = [];
                $item = array_merge_multiple($defaultItems[$item['type']], $item);
            }
        }
        return $array;
    }

    /**
     * 首页默认设置
     */
    public static function getDefault()
    {
        return (new static())->where('page_type', '10')->order('is_default desc,page_id desc')->find();
    }
}
