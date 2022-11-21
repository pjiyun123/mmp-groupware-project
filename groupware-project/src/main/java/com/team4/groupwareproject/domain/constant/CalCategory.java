package com.team4.groupwareproject.domain.constant;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public enum CalCategory implements EnumMapperType{
    회의("conference"),
    교육("learning"),
    발표("presentation"),
    미팅("meeting"),
    출장("business trip"),
    회식("dining together");

    @Getter private final String description;

    @Override
    public String getCode() {
        return name();
    }

}
