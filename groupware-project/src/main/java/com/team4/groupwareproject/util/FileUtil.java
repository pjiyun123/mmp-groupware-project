package com.team4.groupwareproject.util;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.UUID;

@Component
public class FileUtil {

    FTPClient client = null;

    private static final String FTP_ID = "mmp";
    private static final String FTP_PWD = "mpmp90200!";
    private static final String FTP_SERVER = "360map.co.kr";
    private static final int FTP_PORT = 21;

    /** upload 경로 가져오기 */
    public String getUploadPath(String target) {
        String path = "/groupware" + "/" + target ;
        return path;
    }

    /** upload 된 파일 실제 경로 가져오기 */
    public String getViewPath(String target) {
        String path = "http://360map.co.kr/groupware" + "/" + target ;
        return path;
    }

    /** 파일 업로드 */
    public String uploadFile(MultipartFile file , String target) throws IllegalStateException, IOException {

        Date now = new Date();
        Calendar currentDate = Calendar.getInstance();
        DateFormat df = new SimpleDateFormat("yyyyMMddHHmmss");

        UUID uid = UUID.randomUUID();

        String extension = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf(".") + 1);
        String uploadFileName = df.format(now);
        String upName = uid + "-" + uploadFileName + "." + extension;

        String path = getUploadPath(target);

        try {
            int reply;
            client = new FTPClient();
            client.connect(FTP_SERVER, FTP_PORT);

            if(client.login(FTP_ID, FTP_PWD)) {
                reply = client.getReplyCode();

                if (!FTPReply.isPositiveCompletion(reply)) {
                    client.disconnect();
                    return "fail";
                }

                InputStream is = file.getInputStream();

                client.setFileType(FTPClient.BINARY_FILE_TYPE);
                client.setFileTransferMode(FTPClient.STREAM_TRANSFER_MODE);
                client.makeDirectory(path);
                client.storeFile(path + "/" + upName, is);

                is.close();
                client.logout();

            }

        }catch(Exception e) {
            e.printStackTrace();
        }

        return upName;
    }

}
