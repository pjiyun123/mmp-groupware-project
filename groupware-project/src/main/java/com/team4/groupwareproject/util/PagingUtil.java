package com.team4.groupwareproject.util;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class PagingUtil {

    private int nowPg, startPg, endPg, total, cntPerPg, lastPg, start, end;
    private int cntPg = 5;	// 선택할 수 있는 페이지 수

    public List<Integer> pageList = new ArrayList<Integer>();

    // 제일 마지막 페이지 계산
    public void calcLastPg(int total, int cntPerPg) {
        setLastPg((int) Math.ceil((double)total / (double)cntPerPg));
    }

    // 시작, 끝 페이지 계산
    public void calcStartEndPg(int nowPg, int cntPg) {
        setEndPg(((int)Math.ceil((double)nowPg / (double)cntPg)) * cntPg);
        if (getLastPg() < getEndPg()) {
            setEndPg(getLastPg());
        }
        setStartPg(getEndPg() - cntPg + 1);
        if (getStartPg() < 1) {
            setStartPg(1);
        }
    }

    // DB 쿼리에서 사용할 start, end값 계산
    public void calcStartEnd(int nowPg, int cntPerPg) {
        setEnd(nowPg * cntPerPg);
        setStart(getEnd() - cntPerPg);
    }

    public PagingUtil() {
        this.nowPg = 1;
        this.cntPerPg = 10;
    }

    public PagingUtil(int total, int nowPg , int cntPerPg) {
        setNowPg(nowPg);
        setCntPerPg(cntPerPg);
        setTotal(total);
        calcLastPg(getTotal(), getCntPerPg());
        calcStartEndPg(getNowPg(), cntPg);
        calcStartEnd(getNowPg(), getCntPerPg());

        pageList.clear();

        for(int i = this.startPg; i <= this.endPg; i++) {
            pageList.add(i);
        }
    }

    @Override
    public String toString() {
        return "PagingVO [nowPg=" + nowPg + ", startPg=" + startPg + ", endPg=" + endPg + ", total=" + total
                + ", cntPerPg=" + cntPerPg + ", lastPg=" + lastPg + ", start=" + start + ", end=" + end
                + ", cntPg=" + cntPg + "]";
    }

}
