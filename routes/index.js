var express = require('express');
var router = express.Router();
const fs= require('fs')
const folder = "files"
/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readdir(`./${folder}`,{withFileTypes:true},function(err,files){
    res.render('index', { folder:folder,files:files });
  })
});
router.get('/back', function(req, res, next) {
   res.redirect('back');
});
router.get('/newfile', function(req, res, next) {
   fs.writeFile(`./${folder}/${req.query.newfile}`,"",function(err){
      res.redirect("/");
   })
});
router.get('/deletefile/:filename', function(req, res, next) {
   fs.unlink(`./${folder}/${req.params.filename}`,function(err){
      res.redirect("/");
   })
});
router.get('/newfolder', function(req, res, next) {
   fs.mkdir(`./${folder}/${req.query.newfolder}`,function(err){
      res.redirect("/");
   })
});
router.get('/deletefolder/:foldername', function(req, res, next) {
   fs.rmdir(`./${folder}/${req.params.foldername}`,function(err){
      res.redirect("/");
   })
});
router.get('/file/:filename', function(req, res, next) {
   fs.readdir(`./${folder}`,{withFileTypes:true},function(err,files){
      fs.readFile(`./${folder}/${req.params.filename}`,"utf8",function(err,data){
         res.render('index2', { folder,files,filename:req.params.filename,filedata:data});
      })
    })
});
router.get('/folder/:filename', function(req, res, next) {
   fs.readdir(`./${folder}`,{withFileTypes:true},function(err,files){
      fs.readdir(`./${folder}/${req.params.filename}`,{withFileTypes:true},function(err,file2){
     res.render('index3', { folder:folder,files:files,file2 ,foldernam:req.params.filename});
    })
   })
 });
router.post('/file/:filename/updatefile', function(req, res, next) {
   fs.writeFile(`./${folder}/${req.params.filename}`,`${req.body.filedatas}`,function(err){
      res.redirect('back');
   })
});
router.get('/rename/:filename',function(req,res,next){
   fs.rename(`./${folder}/${req.params.filename}`,`./${folder}/${req.query.newname}`,function(err){
      res.redirect('back');
   })
})


module.exports = router;
