# 理解Buffer

- Buffer结构
    buffer是一个像array的对象， 主要用于操作字节。
    - 模块结构
        buffer所占用的内存不是通过v8分配的， 属于堆外内存。 
        由于v8垃圾回收性能的影响，将常用的操作对象用更高效和专有的内存分配回收策略来管理是个不错的思路。
    
    - Buffer对象
        不同编码所占的字符串占用的元素个数各不相同， utf-8编码下 中文字占用三个元素， 字母和半角标点符号占用一个元素。
        给元素的赋值如果小于0， 就将该值逐次加256， 直到得到一个0到255之间的整数。
        如果得到的数值大于255，就逐次减256，直到得到一个0到255之间的整数。
        如果是小数，舍弃小数部分，只保留整数部分。

    - Buffer分配
        node在内存的使用上应用的是在c++层面申请内存， 在js中分配内存
        为了高效的使用申请来的内存， node采用了slab分配机制
        slab是一种动态内存管理机制， 简单而言就是一块申请好固定大小的内存区域
        slab三种状态：
            1. full: 完全分配状态
            2. partial: 部分分配状态
            3. empty: 没有分配状态
        当我们需要Buffer对象 new Buffer(size)
        node 以8kb为界区分Buffer是大对象还是小对象  Buffer.poolSize = 8 * 1024
        这个8kb的值也就是每个slab的大小值， 在js层面， 以它作为单位进行内存的分配
        - 分配小Buffer对象
            如果指定Buffer的大小少于8kb, node会按照小对象的方式进行分配。
            Buffer的分配过程中主要使用一个局部变量pool作为中间处理对象， 处于分配状态的slab单元都指向它。
            var pool;
            function allocPool() {
                pool = new SlowBuffer(Buffer.poolSize);
                pool.used = 0;
            }
        - 分配大Buffer对象
            如果需要超过8kb的Buffer对象， 将会直接分配一个SlowBuffer对象作为slab单元， 这个slab单元将会被这个大Buffer对象独占。
            this.parent = new SlowBuffer(this.length)
            this.offset = 0;

        
    - Buffer转换
        - 字符串转Buffer
            字符串转Buffer对象主要是通过构造函数完成的
            new Buffer(str, [encoding]);
            通过构造函数转换的Buffer对象， 存储的只能是一种编码类型。encoding参数不传递时， 默认按UFT-8编码进行转码和存储。
            一个Buffer对象可以存储不同编码类型的字符串转码时，调用write()方法可以实现该目的
            buf.write(string, [offset], [length], [ending])

        - Buffer转字符串
            buf.toString([encoding], [statr], [end])

        - Buffer不支持的编码类型
            Buffer.isEncoding(encoding)
            对于不支持的编码类型， 可借助iconv 和 iconv-lite
            var iconv = require('icon-lite);
            // Buffer 转字符串
            var str = iconv.decode(buf, 'win1251');
            // 字符串转Buffer
            var buf = iconv.encode("Sample input string", 'win1251')

            iconv-lite无法转换的内容如果是多字节， 会输出<?> 如果是单字节， 则输出？
            iconv则有三级降级策略， 会尝试翻译无法转换的内容， 或是忽略这些内容。

    - Buffer的拼接
        
