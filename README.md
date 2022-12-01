### navigation -> build router flow
exp: tabbase -> dau 4 tab -> 
stack base -> authen truoc || sau moi su dung duoc -> stack
// tabbase truoc hoac login truoc
- parameter dau vao cua moi man hinh || router, optional?? required??
// deeplinking

### local storage, 
- react-native-mmkv

### api chứa config, reuseable path + function

### components chứa service gọi đến storage, api (nói chung là datasource) tương ứng

### components nằm trong screen khác với reusable components tương tự với page_components, global_components

### utilities (formatters, normalizers, validators, enum)

### components quá to thì cần chia nhỏ

### nên defined rõ ràng đầu vào cho component (props:  { id: number })

<!-- <Button id={''} /> Wrong --> 
<!-- <Button id={1} /> Right --> 
Tương tự với đầu ra và đầu vào của function

<!-- Ở android muốn call api local phải chuyển về cùng port và sử dụng IP.
solution: adb -s <device_name> reverse tcp:backend_port tcp:backend_port. -->
